/*global $, CodeMirror, jsbin, jshintEnabled, RSVP, module,
 * setTimeout, template, Inlet */

var store = require('../chrome/storage');
var helper = require('../helper/global_helper');
var saveChecksum = require('../helper/global_helper').saveChecksum;
var analytics = require('../chrome/analytics');
var processors = require('../processors/processor');

// Panel Class
(function(){
  'use strict';  

  var Panel = (function () {
    var Panel = function(){
      this.initialize.apply(this, arguments);
    };

    Panel.order = 0;

    var updateQuery = helper.throttle(function updateQuery() {
      var alt = {
        javascript: 'js',
        live: 'output',
        livetest: 'output_test'
      };

      var visible = getVisible();

      var query = visible.map(function (p) {
        return alt[p.id] || p.id;
      }).join(',');

      if (jsbin.state.code && jsbin.state.owner) {
        $.ajax({
          url: jsbin.getURL({ withRevision: true }) + '/settings',
          type: 'PUT',
          data: { panels: visible.map(function (p) { return p.id; }) },
          success: function () {}
        });
      }

      if (history.replaceState) {
        history.replaceState(null, null, '?' + query);
      }
    }, 100);

    var getVisible = function () {
      var panels = panels,
          visible = [];
      for (var panel in panels) {
        if (panels[panel].visible) { visible.push(panels[panel]); }
      }
      return visible;
    };

    var getHighlightLines = function () {
      var hash = [];
      var lines = '';
      var panel;
      for (var name in jsbin.panels.panels) {
        panel = jsbin.panels.panels[name];
        if (panel.editor) {
          lines = panel.editor.highlightLines().string;
          if (lines) {
            hash.push(name.substr(0, 1).toUpperCase() + ':L' + lines);
          }
        }
      }
      return hash.join(',');
    };

    Panel.updateQuery = updateQuery;
    Panel.getHighlightLines = getHighlightLines;
    
    return Panel;
  })();

  // Panel Object
  Panel.prototype = (function(){
    var virgin = true;
    var visible = false;
    var badChars =  new RegExp('[\u200B\u0080-\u00a0]', 'g');
    var userResizeable = !$('html').hasClass('layout');
    
    var initialize = function(target, name, settings){
      var panel = this,
          showPanelButton = true,
          $panel = null,
          splitterSettings = {},
          cmSettings = {},
          panelLanguage = name,
          $panelwrapper = $('<div class="stretch panelwrapper"></div>');

      panel.settings = settings = settings || {};
      panel.id = panel.name = target;
      $panel = $('.panel.' + target);
      $panel.data('name', target);
      panel.$el = $panel.detach();
      panel.$el.appendTo($panelwrapper);
      $panelwrapper.appendTo(helper.$source);
      panel.$panel = panel.$el;
      panel.$el = panel.$el.parent().hide();
      panel.el = document.getElementById(target);
      panel.order = ++Panel.order;

      panel.label = (settings.label || target);

      panel.$el.data('panel', panel);

      this._eventHandlers = {};
      
      panel.on('show', Panel.updateQuery);
      panel.on('hide', Panel.updateQuery);

      // keyboard shortcut (set in keyboardcontrol.js)
      helper.panelShortcuts[helper.panelShortcuts.start + panel.order] = panel.id;

      if (panel.order === 1) {
        settings.nosplitter = true;
      }

      if (settings.editor) {
        cmSettings = {
          parserfile: [],
          readOnly: jsbin.state.embed ? 'nocursor' : false,
          dragDrop: false, // we handle it ourselves
          mode: helper.editorModes[panelLanguage],
          lineWrapping: true,
          // gutters: ['line-highlight'],
          theme: jsbin.settings.theme || 'jsbin',
          highlightLine: true
        };

        if (name === 'dataframe') {
          cmSettings.mode = {name: "javascript", json: true};
        }
        
        $.extend(cmSettings, jsbin.settings.editor || {});

        cmSettings.extraKeys = {};

        // only the js panel for now, I'd like this to work in
        // the HTML panel too, but only when you were in JS scope
        if (name === 'javascript') {
          // cmSettings.extraKeys.Tab = 'autocomplete';
        } else {
          cmSettings.extraKeys.Tab = 'snippets';
        }

        // some emmet "stuff" - TODO decide whether this is needed still...
        $.extend(cmSettings, {
          syntax: name,   /* define Zen Coding syntax */
          profile: name   /* define Zen Coding output profile */
        });

        // make sure tabSize and indentUnit are numbers
        if (typeof cmSettings.tabSize === 'string') {
          cmSettings.tabSize = parseInt(cmSettings.tabSize, 10) || 2;
        }
        if (typeof cmSettings.indentUnit === 'string') {
          cmSettings.indentUnit = parseInt(cmSettings.indentUnit, 10) || 2;
        }

        panel.editor = CodeMirror.fromTextArea(panel.el, cmSettings);
        Inlet(panel.editor);

        panel.editor.on('highlightLines', function () {
          window.location.hash = Panel.getHighlightLines();
        });

        // Bind events using CM3 syntax
        panel.editor.on('change', function codeChange(cm, changeObj) {
          if (jsbin.saveDisabled) {
            helper.$document.trigger('codeChange.live', [{ panelId: panel.id, revert: true, origin: changeObj.origin }]);
          } else {
            helper.$document.trigger('codeChange', [{ panelId: panel.id, revert: true, origin: changeObj.origin }]);
          }
          return true;
        });

        panel.editor.on('focus', function () {
          panel.focus();
        });

        // Restore keymaps taken by emmet but that we need for other functionalities
        if (name === 'javascript' || name == 'jasmine') {
          var cmd = $.browser.platform === 'mac' ? 'Cmd' : 'Ctrl';
          var map = {};
          map[cmd + '-D'] = 'deleteLine';
          map[cmd + '-/'] = function(cm) { CodeMirror.commands.toggleComment(cm); };
          map.name = 'noEmmet';
          panel.editor.addKeyMap(map);
        }

        panel._setupEditor(panel.editor, name);
      }

      if ($('html').is('.layout')) {
        panel.splitter = $();
        panel.$el.removeClass('stretch');
      } else if (!settings.nosplitter) {
        panel.splitter = panel.$el.splitter(splitterSettings).data('splitter');
        panel.splitter.hide();
      } else {
        // create a fake splitter to let the rest of the code work
        panel.splitter = $();
      }

      if (jsbin.state.processors && jsbin.state.processors[name]) {
        panelLanguage = jsbin.state.processors[name];
        jsbin.processors.set(panel, jsbin.state.processors[name]);
      } else if (settings.processor) { // FIXME is this even used?
        panelLanguage = settings.processors[settings.processor];
        jsbin.processors.set(panel, settings.processor);
      } else if (processors[panel.id]) {
        jsbin.processors.set(panel, panel.id);
      } else {
        // this is just a dummy function for console & output...which makes no sense...
        panel.processor = function (str) {
          return new RSVP.Promise(function (resolve) {
            resolve(str);
          });
        };

      }

      if (settings.beforeRender) {
        helper.$document.bind('render', $.proxy(settings.beforeRender, panel));
      }

      if (!settings.editor) {
        panel.ready = true;
      }

      // append panel to controls
      if (jsbin.state.embed) {
        // showPanelButton = window.location.search.indexOf(panel.id) !== -1;
      }

      if (showPanelButton) {
        this.controlButton = $('<a role="button" class="button group" href="?' + name + '">' + panel.label + '</a>');
        this.updateAriaState();

        this.controlButton.click(function () {
          panel.toggle();
          return false;
        });
        this.controlButton.appendTo('#panels');
      }

      $panel.focus(function () {
        panel.focus();
      });
      $panel.add(this.$el.find('.label')).click(function () {
        panel.focus();
      });
    };

    var updateAriaState = function updateAriaState() {
      this.controlButton.attr('aria-label', this.label + ' Panel: ' + (this.visible ? 'Active' : 'Inactive'));
    };
    
    var show = function show(x) {
      if (this.visible) {
        return;
      }
      helper.$document.trigger('history:close');
      // check to see if there's a panel to the left.
      // if there is, take it's size/2 and make this our
      // width
      var panel = this,
          panelCount = panel.$el.find('.panel').length;

      analytics.showPanel(panel.id);

      // panel.$el.show();
      if (panel.splitter.length) {
        if (panelCount === 0 || panelCount > 1) {
          var $panel = $('.panel.' + panel.id).show();
          // $panel.next().show(); // should be the splitter...
          $panel.closest('.panelwrapper').show();
        } else {
          panel.$el.show();
        }
        panel.splitter.show();
      } else {
        panel.$el.show();
      }

      helper.$body.addClass('panelsVisible');

      if (panel.settings.show) {
        panel.settings.show.call(panel, true);
      }
      panel.controlButton.addClass('active');
      panel.visible = true;
      this.updateAriaState();

      // update the splitter - but do it on the next tick
      // required to allow the splitter to see it's visible first

      // setTimeout(function () {
      // }, 0);

      if (this.userResizeable) {
        if (x !== undefined) {
          panel.splitter.trigger('init', x);
        } else {
          panel.distribute();
        }
      }
      
      if (panel.editor) {
        // populate the panel for the first time
        if (panel.virgin) {
          var top = panel.$el.find('.label').outerHeight();
          top += 8;
          $(panel.editor.scroller).find('.CodeMirror-lines').css('padding-top', top);

          _populateEditor(panel, panel.name);
        }
        if (!panel.virgin || jsbin.panels.ready) {
          panel.editor.focus();
          panel.focus();
        }
        if (panel.virgin) {
          if (panel.settings.init) {
            setTimeout(function () {
              panel.settings.init.call(panel);
            }, 10);
          }
        }
      } else {
        panel.focus();
      }
      // update all splitter positions
      helper.$document.trigger('sizeeditors');
      
      panel.trigger('show');

      panel.virgin = false;

      // TODO save which panels are visible in their profile - but check whether it's their code
    };

    var hide = function () {
      var panel = this;
      // panel.$el.hide();
      panel.visible = false;
      this.updateAriaState();
      analytics.hidePanel(panel.id);

      // update all splitter positions
      // LOGIC: when you go to hide, you need to check if there's
      // other panels inside the panel wrapper - if there are
      // hide the nested panel and any previous visible splitter
      // if there's only one - then hide the whole thing.
      // if (panel.splitter.length) {
      var panelCount = panel.$el.find('.panel').length;
      if (panelCount === 0 || panelCount > 1) {
        var $panel = $('.panel.' + panel.id).hide();
        $panel.prev().hide(); // hide the splitter if there is one

        // TODO trigger a distribute horizontally
        if ($panel.closest('.panelwrapper').find('.panel:visible').length === 0) {
          $panel.closest('.panelwrapper').hide();
          // panel.splitter.hide();
          // TODO FIXME
        }
      } else {
        panel.$el.hide();
        panel.splitter.hide();
      }
      // } else {
      //   panel.$el.hide();
      // }
      if (panel.editor) {
        panel.controlButton.toggleClass('hasContent', !!this.getCode().trim().length);
      }

      panel.controlButton.removeClass('active');
      panel.distribute();

      if (panel.settings.hide) {
        panel.settings.hide.call(panel, true);
      }

      // this.controlButton.show();
      // setTimeout(function () {
      var visible = jsbin.panels.getVisible();
      if (visible.length) {
        jsbin.panels.focused = visible[0];
        if (jsbin.panels.focused.editor) {
          jsbin.panels.focused.editor.focus();
        } else {
          jsbin.panels.focused.$el.focus();
        }
        jsbin.panels.focused.focus();
      }

      helper.$document.trigger('sizeeditors');
      panel.trigger('hide');

      // note: the history:open does first check whether there's an open panels
      // and if there are, it won't show the history, it'll just ignore the event
      helper.$document.trigger('history:open');
    };

    var toggle = function () {
      (this)[this.visible ? 'hide' : 'show']();
    };

    var getCode = function () {
      if (this.editor) {
        this.badChars.lastIndex = 0;
        return this.editor.getCode().replace(this.badChars, '');
      }
    };

    var setCode = function (content) {
      if (this.editor) {
        if (content === undefined) {
          content = '';
        }
        // TODO
        // this.controlButton.toggleClass('hasContent', !!content.trim().length);
        this.codeSet = true;
        this.editor.setCode(content.replace(this.badChars, ''));
      }
    };
    
    var codeSet = false;
    var blur = function () {
      this.$panel.addClass('blur');
    };
    var focus = function () {
      this.$panel.removeClass('blur');
      jsbin.panels.focus(this);
      $(jsbin.panels.panels[this.name].$el).find('textarea').focus();
    };
    var render = function () {
      var args = [].slice.call(arguments);
      var panel = this;
      return new RSVP.Promise(function (resolve, reject) {
        if (panel.editor) {
          panel.processor(panel.getCode()).then(resolve, reject);
        } else if (panel.visible && panel.settings.render) {
          if (jsbin.panels.ready) {
            panel.settings.render.apply(panel, args);
          }
          resolve();
        }
      });
    };

    var init = function () {
      if (this.settings.init) { this.settings.init.call(this); }
    };
    
    var _setupEditor = function () {
      var focusedPanel = store.sessionStorage.getItem('panel') || jsbin.settings.focusedPanel,
          panel = this,
          editor = panel.editor;

      // overhang from CodeMirror1
      editor.setCode = function (str) {
        //Cannot call method 'chunkSize' of undefined
        try {
          editor.setValue(str);
        } catch(err) {
          // console.error(panel.id, err);
        }
      };


      editor.getCode = function () {
        return editor.getValue();
      };

      editor.currentLine = function () {
        var pos = editor.getCursor();
        return pos.line;
      };

      // editor.setOption('onKeyEvent', keycontrol);
      // editor.setOption('onFocus', function () {
      // panel.$el.trigger('focus');
      // });

      // This prevents the browser from jumping
      if (jsbin.mobile || jsbin.tablet || jsbin.embed) {
        editor._focus = editor.focus;
        editor.focus = function () {
          // console.log('ignoring manual call');
        };
      }

      editor.id = panel.name;

      editor.win = editor.getWrapperElement();
      editor.scroller = $(editor.getScrollerElement());

      var $label = panel.$el.find('.label');
      if (document.body.className.indexOf('ie6') === -1 && $label.length) {
        editor.on('scroll', function (event) {
          var scrollInfo = editor.getScrollInfo();
          if (scrollInfo.top > 10) {
            $label.stop().animate({ opacity: 0 }, 20, function () {
              $(this).hide();
            });
          } else {
            $label.show().stop().animate({ opacity: 1 }, 150);
          }
        });
      }

      var $error = null;
      helper.$document.bind('sizeeditors', function () {
        if (panel.visible) {
          var height = panel.editor.scroller.closest('.panel').outerHeight();
          var offset = 0;
          $error = panel.$el.find('details');
          offset += ($error.filter(':visible').height() || 0);

          if (!jsbin.lameEditor) {
            editor.scroller.height(height - offset);
          }
          try { editor.refresh(); } catch (e) {}

          setTimeout(function () {
            helper.$source[0].style.paddingLeft = '1px';
            setTimeout(function () {
              helper.$source[0].style.paddingLeft = '0';
            }, 0);
          }, 0);
        }
      });

      // required because the populate looks at the height, and at
      // this point in the code, the editor isn't visible, the browser
      // needs one more tick and it'll be there.
      setTimeout(function () {
        // if the panel isn't visible this only has the effect of putting
        // the code in the textarea (though probably costs us a lot more)
        // it has to be re-populated upon show for the first time because
        // it appears that CM2 uses the visible height to work out what
        // should be shown.
        panel.ready = true;
        _populateEditor(panel, panel.name);

        if (focusedPanel == panel.name) {
          // another fracking timeout to avoid conflict with other panels firing up
          setTimeout(function () {
            panel.focus();
            if (panel.visible && !jsbin.mobile && !jsbin.tablet) {
              editor.focus();

              var code = editor.getCode().split('\n'),
                  blank = null,
                  i = 0;

              for (; i < code.length; i++) {
                if (blank === null && code[i].trim() === '') {
                  blank = i;
                  break;
                }
              }

              editor.setCursor({ line: (store.sessionStorage.getItem('line') || blank || 0) * 1, ch: (store.sessionStorage.getItem('character') || 0) * 1 });
            }
          }, 110); // This is totally arbitrary
        }
      }, 0);
    };

    var populateEditor = function () {
      _populateEditor(this, this.name);
    };

    // events
    var on =  function (event, fn) {
      (this._eventHandlers[event] = this._eventHandlers[event] || []).push(fn);
      return this;
    };

    var trigger = function (event) {
      var args = [].slice.call(arguments, 1);
      args.unshift({ type: event });
      for (var list = this._eventHandlers[event], i = 0; list && list[i];) {
        list[i++].apply(this, args);
      }
      return this;
    };

    function _populateEditor(editor, panel) {
      if (!editor.codeSet) {
        // populate - should eventually use: session, saved data, local storage
        var cached = store.sessionStorage.getItem('jsbin.content.' + panel), // session code
            saved = jsbin.embed ? null : localStorage.getItem('saved-' + panel), // user template
            sessionURL = store.sessionStorage.getItem('url'),
            changed = false;

        // if we clone the bin, there will be a checksum on the state object
        // which means we happily have write access to the bin
        if (sessionURL !== jsbin.getURL() && !jsbin.state.checksum) {
          // nuke the live saving checksum
          store.sessionStorage.removeItem('checksum');
          saveChecksum = false;
        }

        if (template && cached == template[panel]) { // restored from original saved
          editor.setCode(cached);
        } else if (cached && sessionURL == jsbin.getURL() && sessionURL !== jsbin.root) { // try to restore the session first - only if it matches this url
          editor.setCode(cached);
          // tell the document that it's currently being edited, but check that it doesn't match the saved template
          // because sessionStorage gets set on a reload
          changed = cached != saved && cached != template[panel];
        } else if (!template.post && saved !== null && !/(edit|embed)$/.test(window.location) && !window.location.search) { // then their saved preference
          editor.setCode(saved);
          var processor = JSON.parse(localStorage.getItem('saved-processors') || '{}')[panel];
          if (processor) {
            jsbin.processors.set(jsbin.panels.panels[panel], processor);
          }
        } else { // otherwise fall back on the JS Bin default
          editor.setCode(template[panel]);
        }

        editor.editor.clearHistory();

      } else {
        // this means it was set via the url
        changed = true;
      }

      if (changed) {
        helper.$document.trigger('codeChange', [ { revert: false, onload: true } ]);
      }
    }

    var distribute = function () {
      if (!userResizeable) {
        return;
      }

      var visible = $('#source .panelwrapper:visible'),
          width = 100,
          height = 0,
          innerW = helper.$window.width() - (visible.length - 1), // to compensate for border-left
          innerH = $('#source').outerHeight(),
          left = 0,
          right = 0,
          top = 0,
          panel,
          nestedPanels = [];

      if (visible.length) {
        helper.$body.addClass('panelsVisible');

        // visible = visible.sort(function (a, b) {
        //   return a.order < b.order ? -1 : 1;
        // });

        width = 100 / visible.length;
        for (var i = 0; i < visible.length; i++) {
          panel = $.data(visible[i], 'panel');
          right = 100 - (width * (i+1));
          panel.$el.css({ top: 0, bottom: 0, left: left + '%', right: right + '%' });
          panel.splitter.trigger('init', innerW * left/100);
          panel.splitter[i === 0 ? 'hide' : 'show']();
          left += width;

          nestedPanels = $(visible[i]).find('.panel');
          if (nestedPanels.length > 1) {
            top = 0;
            nestedPanels = nestedPanels.filter(':visible');
            height = 100 / nestedPanels.length;
            nestedPanels.each(function (i) {
              bottom = 100 - (height * (i+1));
              var panel = jsbin.panels.panels[$.data(this, 'name')];
              // $(this).css({ top: top + '%', bottom: bottom + '%' });
              $(this).css('top', top + '%');
              $(this).css('bottom', bottom + '%' );
              if (panel.splitter.hasClass('vertical')) {
                panel.splitter.trigger('init', innerH * top/100);
                panel.splitter[i === 0 ? 'hide' : 'show']();
              }
              top += height;
            });
          }
        }
      } else if (!jsbin.embed) {
        $('#history').show();
        setTimeout(function () {
          helper.$body.removeClass('panelsVisible');
        }, 100); // 100 is on purpose to add to the effect of the reveal
      }
    };

    
    // // dirty, but simple
    // var distribute = function () {
    //   Panels.distribute();
    // };
    
    return{
      initialize: initialize,
      virgin: virgin,
      visible: visible,
      badChars: badChars,
      userResizeable: userResizeable,
      updateAriaState: updateAriaState,
      show: show,
      hide: hide,
      toggle: toggle,
      getCode: getCode,
      setCode: setCode,
      codeSet: codeSet,
      blur: blur,
      focus: focus,
      render: render,
      init: init,
      _setupEditor: _setupEditor,
      populateEditor: populateEditor,
      on: on,
      trigger: trigger,
      distribute: distribute
    };
  })();

  module.exports = Panel;
})();
