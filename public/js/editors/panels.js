/*global $, jsbin, _, setTimeout, module */

var helper = require('../helper/global_helper');
var store = require('../chrome/storage');
var renderLivePreview = require('../render/render_live_preview').renderLivePreview;
var jsconsole = require('../render/console');
var Panel = require('../editors/panel');
// var PanelFactory = require('../editors/panel_factory');
// var editors = require('../editors/editors');

(function(){
  'use strict';
  
  var PanelFactory = (function(){
    var createDataset = function () {
      return new Panel('dataframe', 'javascript', { editor: true, label: 'Data' });
    };

    var createHtml = function () {
      var init = function () {
        // set cursor position on first blank line
        // 1. read all the inital lines
        var lines = this.editor.getValue().split('\n'),
            blank = -1;
        lines.forEach(function (line, i) {
          if (blank === -1 && line.trim().length === 0) {
            blank = i;
            //exit
          }
        });

        if (blank !== -1) {
          this.editor.setCursor({ line: blank, ch: 2 });
          if (lines[blank].length === 0) {
            this.editor.indentLine(blank, 'add');
          }
        }
      };

      return new Panel('html', 'html', { editor: true, label: 'HTML', init: init });
    };

    var createCss = function () {
      return new Panel('css', 'css', { editor: true, label: 'CSS' });
    };

    var createJavascript = function () {
      return new Panel('javascript', 'javascript', { editor: true, label: 'JavaScript' });
    };

    var createSpec = function () {
      return new Panel('jasmine', 'javascript', { editor: true, label: 'Spec' });
    };

    var createConsole = function () {
      // hide and show callbacks registered in console.js
      return new Panel('console', 'console', { label: 'Console' });
    };

    var createLive = function () {
      function show() {
        if (Panels.ready) {
          renderLivePreview();
        }
      }

      function hide() {
        // detroy the iframe if we hide the panel
        // note: $live is defined in live.js
        // Commented out so that the live iframe is never destroyed
        //if (Panels.panels.console.visible === false) {
        // $live.find('iframe').remove();
        //}
      }

      return new Panel('live', 'live', { label: 'Output', show: show, hide: hide });
    };

    
    var createLivetest = function () {
      function show() {
        if (Panels.ready) {
          renderLivePreview();
        }
      }

      function hide() {
        // detroy the iframe if we hide the panel
        // note: $live is defined in live.js
        // Commented out so that the live iframe is never destroyed
        //if (Panels.panels.console.visible === false) {
        // $live.find('iframe').remove();
        //}
      }

      return new Panel('livetest', 'live', { label: 'OutputTest', show: show, hide: hide });
    };

    return {
      createDataset: createDataset,
      createHtml: createHtml,
      createCss: createCss,
      createJavascript: createJavascript,
      createSpec: createSpec,
      createConsole: createConsole,
      createLive: createLive,
      createLivetest: createLivetest
    };
  })();

  var Panels = (function(){
    var Panels = function(){
    };
    
    Panels.panels = {};
    Panels.ready = false;
    Panels.saveOnExit = false;
    Panels.focused = !!store.sessionStorage.getItem('panel');
    
    var createPanels = function(){
      // show all panels (change the order to control the panel order)
      Panels.panels.html = PanelFactory.createHtml();
      Panels.panels.css = PanelFactory.createCss();
      Panels.panels.javascript = PanelFactory.createJavascript();
      Panels.panels.jasmine = PanelFactory.createSpec();
      Panels.panels.dataframe = PanelFactory.createDataset();

      Panels.panels.console = PanelFactory.createConsole();
      upgradeConsolePanel(Panels.panels.console);
      Panels.panels.live = PanelFactory.createLive();
      Panels.panels.livetest = PanelFactory.createLivetest();
    };

    var upgradeConsolePanel = function(console){
      console.$el.click(function (event) {
        if (!$(event.target).closest('#output').length) {
          jsconsole.focus();
        }
      });
      console.reset = function () {
        jsconsole.reset();
      };
      console.settings.render = function (withAlerts) {
        var html = Panels.panels.html.getCode().trim();
        if (html === '') {
          panels.javascript.render().then(function (echo) {
            echo = echo.trim();
            return getPreparedCode().then(function (code) {
              code = code.replace(/<pre>/, '').replace(/<\/pre>/, '');

              setTimeout(function() {
                jsconsole.run({
                  echo: echo,
                  cmd: code
                });
              }, 0);
            });
          }, function (error) {
            console.warn('Failed to render JavaScript');
            console.warn(error);
          });

          // Tell the iframe to reload
          renderer.postMessage('render', {
            source: '<html>'
          });
        } else {
          renderLivePreview(withAlerts || false);
        }
      };
      console.settings.show = function () {
        jsconsole.clear();
        // renderLivePreview(true);
        // setTimeout because the renderLivePreview creates the iframe after a timeout
        setTimeout(function () {
          if (Panels.panels.console.ready && !jsbin.embed) {
            jsconsole.focus();
          }
        }, 0);
      };
      console.settings.hide = function () {
        // Removal code is commented out so that the
        // output iframe is never removed
        if (!Panels.panels.live.visible) {
          // $live.find('iframe').remove();
        }
      };

      helper.$document.one('jsbinReady', function () {
        var hidebutton = function () {
          $('#runconsole')[this.visible ? 'hide' : 'show']();
        };

        jsbin.panels.panels.live.on('show', hidebutton).on('hide', hidebutton);

        if (jsbin.panels.panels.live.visible) {
          $('#runconsole').hide();
        }

      });
    };
    
    var list = function(){
      return _.map(Panels.panels, function(key, value){
        return {
          name: value,
          display: $('#' + value).parents('.panelwrapper').css('display')
        };
      });
    };

    var visible_panels = function(){
      return _.select(list(), function(object){
        return object.display === "block";
      });
    };

    var visible_panels_name = function(){
      return _.map(visible_panels(), function(object){
        return object.name;
      });
    };

    var current_visible_index = function(){
      return _.findIndex(visible_panels(), function(object){
        return object.name === Panels.focused.el.id;
      });
    };

    var left_panel = function(){
      var _panels = visible_panels();
      var index = current_visible_index() - 1;
      
      return Panels.panels[_panels[index].name];
    };

    var right_panel = function(){
      var _panels = visible_panels();
      var index = current_visible_index() + 1;
      
      return Panels.panels[_panels[index].name];
    };

    var getVisible = function () {
      var visible = [];
      for (var panel in Panels.panels) {
        if (Panels.panels[panel].visible) { visible.push(Panels.panels[panel]); }
      }

      return visible;
    };

    var save = function () {
      // don't save panel state if we're in embed mode
      if (jsbin.embed) {
        return;
      }

      var visible = getVisible(),
          state = {},
          panel,
          left = '',
          width = helper.$window.width();

      for (var i = 0; i < visible.length; i++) {
        panel = visible[i];
        left = panel.$el.css('left');
        if (left.indexOf('%') === -1) {
          // convert the pixel to relative - this is because jQuery pulls
          // % for Webkit based, but px for Firefox & Opera. Cover our bases
          left = (parseFloat(left)  / width * 100) + '%';
        }
        state[panel.name] = left;
      }

      store.sessionStorage.setItem('jsbin.panels', JSON.stringify(state));
    };

    var restore = function () {
      // if there are panel names on the hash (v2 of jsbin) or in the query (v3)
      // then restore those specific panels and evenly distribute them.
      var open = [],
          defaultPanels = ['html', 'live'], // sigh, live == output :(
          location = window.location,
          search = location.search.substring(1),
          hash = location.hash.substring(1),
          toopen = [],
          state = jsbin.embed ? null : JSON.parse(store.sessionStorage.getItem('jsbin.panels') || 'null'),
          hasContent = { javascript: Panels.panels.javascript.getCode().length,
                         css: Panels.panels.css.getCode().length,
                         html: Panels.panels.html.getCode().length
                       },
          name = '',
          i = 0,
          panel = null,
          init = [],
          panelURLValue = '',
          openWithSameDimensions = false,
          width = helper.$window.width(),
          deferredCodeInsert = '',
          validPanels = 'dataframe live livetest javascript jasmine html css console'.split(' '),
          cachedHash = '';

      if (history.replaceState && (location.pathname.indexOf('/edit') !== -1) || ((location.origin + location.pathname) === jsbin.getURL() + '/')) {
        // history.replaceState(null, '', jsbin.getURL() + (jsbin.getURL() === jsbin.root ? '' : '/edit') + (hash ? '#' + hash : ''));
      }

      if (search || hash) {
        var query = (search || hash);

        // assume the query is: html=xyz
        if (query.indexOf('&') !== -1) {
          query = getQuery(search || hash);
          toopen = Object.keys(query).reduce(function (toopen, key) {
            if (key.indexOf(',') !== -1 && query[key] === '') {
              toopen = stringAsPanelsToOpen(key);
              return toopen;
            }

            if (key === 'js') {
              query.javascript = query.js;
              key = 'javascript';
            }

            if (key === 'output') {
              query.live = query.live;
              key = 'live';
            }

            if (query[key] === undefined) {
              query[key] = '';
            }

            if (validPanels.indexOf(key) !== -1) {
              toopen.push(key + '=' + query[key]);
            }

            return toopen;
          }, []);
        } else {
          toopen = stringAsPanelsToOpen(query);
        }
      }

      if (toopen.length === 0) {
        if (state !== null) {
          toopen = Object.keys(state);
        }
        else {
          // load from personal settings
          toopen = jsbin.settings.panels;
        }
      }

      if (toopen.length === 0) {
        if (hasContent.javascript) {toopen.push('javascript');}
        if (hasContent.html) {toopen.push('html');}
        if (hasContent.css) {toopen.push('css');}
        toopen.push('live');
      }

      Panels.saveOnExit = true;

      /* Boot code */
      // then allow them to view specific panels based on comma separated hash fragment/query
      i = 0;

      if (toopen.length === 0) {
        toopen = defaultPanels;
      }

      if (toopen.length) {
        for (name in state) {
          if (toopen.indexOf(name) !== -1) {
            i++;
          }
        }

        if (i === toopen.length) {
          openWithSameDimensions = true;
        }

        for (i = 0; i < toopen.length; i++) {
          panelURLValue = null;
          name = toopen[i];

          // if name contains an `=` it means we also need to set that particular panel to that code
          if (name.indexOf('=') !== -1) {
            panelURLValue = name.substring(name.indexOf('=') + 1);
            name = name.substring(0, name.indexOf('='));
          }

          if (Panels.panels[name]) {
            panel = Panels.panels[name];
            // console.log(name, 'width', state[name], width * parseFloat(state[name]) / 100);
            if (panel.editor && panelURLValue !== null) {
              panel.setCode(decodeURIComponent(panelURLValue));
            }

            if (openWithSameDimensions && toopen.length > 1) {
              panel.show(width * parseFloat(state[name]) / 100);
            } else {
              panel.show();
            }
            init.push(panel);
          } else if (name && panelURLValue !== null) { // TODO support any varible insertion
            (function (name, panelURLValue) {
              var todo = ['html', 'javascript', 'css'];

              var deferredInsert = function (event, data) {
                var code, parts, panel = panels[data.panelId] || {};

                if (data.panelId && panel.editor && panel.ready === true) {
                  todo.splice(todo.indexOf(data.panelId), 1);
                  try {
                    code = panel.getCode();
                  } catch (e) {
                    // this really shouldn't happen
                    // console.error(e);
                  }
                  if (code.indexOf('%' + name + '%') !== -1) {
                    parts = code.split('%' + name + '%');
                    code = parts[0] + decodeURIComponent(panelURLValue) + parts[1];
                    panel.setCode(code);
                    helper.$document.unbind('codeChange', deferredInsert);
                  }
                }

                if (todo.length === 0) {
                  helper.$document.unbind('codeChange', deferredInsert);
                }
              };

              helper.$document.bind('codeChange', deferredInsert);
            }(name, panelURLValue));
          }
        }

        // support the old jsbin v1 links directly to the preview
        if (toopen.length === 1 && toopen[0] === 'preview') {
          panels.live.show();
        }

        if (!openWithSameDimensions) {distribute();}
      }

      // now restore any data from sessionStorage
      // TODO add default templates somewhere
      // var template = {};
      // for (name in panels) {
      //   panel = panels[name];
      //   if (panel.editor) {
      //     // panel.setCode(store.sessionStorage.getItem('jsbin.content.' + name) || template[name]);
      //   }
      // }

      for (i = 0; i < init.length; i++) {
        init[i].init();
      }

      var visible = getVisible();
      if (visible.length) {
        helper.$body.addClass('panelsVisible');
        if (!Panels.focused) {
          visible[0].show();
        }
      }

    };

    var savecontent = function () {
      // loop through each panel saving it's content to sessionStorage
      var name, panel;
      for (name in Panels.panels) {
        panel = Panels.panels[name];
        if (panel.editor) { store.sessionStorage.setItem('jsbin.content.' + name, panel.getCode()); }
      }
    };

    var getHighlightLines = function () {
      var hash = [];
      var lines = '';
      var panel;
      for (var name in Panels.panels) {
        panel = Panels.panels[name];
        if (panel.editor) {
          lines = panel.editor.highlightLines().string;
          if (lines) {
            hash.push(name.substr(0, 1).toUpperCase() + ':L' + lines);
          }
        }
      }
      return hash.join(',');
    };

    var focus = function (panel) {
      Panels.focused = panel;

      if (panel) {
        $('.panel').removeClass('focus').filter('.' + panel.id).addClass('focus');
      }
    };

    var userResizeable = !$('html').hasClass('layout');

    if (!userResizeable) {
      $('#source').removeClass('stretch');
    }

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

    
    // evenly distribute the width of all the visible panels
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
              var panel = Panels.panels[$.data(this, 'name')];
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

    var show = function (panelId) {
      Panels.panels[panelId].show();
      if (Panels.panels[panelId].editor) {
        Panels.panels[panelId].editor.focus();
      }
      Panels.panels[panelId].focus();
    };

    var hide = function (panelId) {
      var panels = Panels.panels;
      if (panels[panelId].visible) {
        panels[panelId].hide();
      }

      var visible = getVisible();
      if (visible.length) {
        Panels.focused = visible[0];
        if (Panels.focused.editor) {
          Panels.focused.editor.focus();
        } else {
          Panels.focused.$el.focus();
        }
        Panels.focused.focus();
      }

      /*
       } else if ($history.length && !$body.hasClass('panelsVisible')) {
       $body.toggleClass('dave', $history.is(':visible'));
       $history.toggle(100);
       } else if ($history.length === 0) {
       // TODO load up the history
       }
       */
    };

    var hideAll = function () {
      var visible = getVisible(),
          i = visible.length;
      while (i--) {
        visible[i].hide();
      }
    };

    // private
    function stringAsPanelsToOpen(query) {
      var validPanels = ['dataframe', 'live', 'livetest','javascript', 'jasmine', 'html', 'css', 'console'];

      return query.split(',').reduce(function (toopen, key) {
        if (key === 'js') {
          key = 'javascript';
        }

        if (key === 'output') {
          key = 'live';
        }

        if (key === 'output_test') {
          key = 'livetest';
        }    

        if (validPanels.indexOf(key) !== -1) {
          toopen.push(key);
        }

        return toopen;
      }, []);
    }

    function getQuery(qs) {
      var sep = '&';
      var eq = '=';
      var obj = {};

      var regexp = /\+/g;
      qs = qs.split(sep);

      var maxKeys = 1000;

      var len = qs.length;
      // maxKeys <= 0 means that we should not limit keys count
      if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
      }

      for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, '%20'),
            idx = x.indexOf(eq),
            kstr, vstr, k, v;

        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = '';
        }

        try {
          k = decodeURIComponent(kstr);
          v = decodeURIComponent(vstr);
        } catch (e) {
          k = kstr;
          v = vstr;
        }

        if (!(window.hasOwnProperty ? window.hasOwnProperty(obj, k) : obj.hasOwnProperty(k))) {
          obj[k] = v;
        } else if ($.isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }

      return obj;
    }

    var allEditors = function (fn) {
      var panelId, panel;
      for (panelId in Panels.panels) {
        panel = Panels.panels[panelId];
        if (panel.editor) fn(panel);
      }
    };

    var setup = function(){
      createPanels();
      
      // jsconsole.init(); // sets up render functions etc.
      Panels.panels.livetest.settings.render = function (showAlerts) {
        if (Panels.ready) {
          renderLivePreview(showAlerts);
        }
      };

      setTimeout(function () {
        restore();
      }, 10);

      focus(getVisible()[0] || null);
      
      var editorsReady = setInterval(function () {
        var ready = true,
            resizeTimer = null,
            panel,
            panelId,
            hash = window.location.hash.substring(1);


        for (panelId in Panels.panels) {
          panel = Panels.panels[panelId];
          if (panel.visible && !panel.ready) {
            ready = false;
            break;
          }
        }

        Panels.ready = ready;

        if (ready) {
          allEditors(function (panel) {
            var key = panel.id.substr(0, 1).toUpperCase() + ':L';
            if (hash.indexOf(key) !== -1) {
              var lines = hash.match(new RegExp(key + '(\\d+(?:-\\d+)?)'));
              if (lines !== null) {
                panel.editor.highlightLines(lines[1]);
              }
            }
          });

          clearInterval(editorsReady);
          // panels.ready = true;
          // if (typeof editors.onReady == 'function') editors.onReady();
          // panels.distribute();

          // if the console is visible, it'll handle rendering of the output and console
          if (Panels.panels.console.visible) {
            Panels.panels.console.render();
          } else {
            // otherwise, force a render
            renderLivePreview();
          }


          $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
              helper.$document.trigger('sizeeditors');
            }, 100);
          });

          helper.$document.trigger('sizeeditors');
          helper.$document.trigger('jsbinReady');
        }
      }, 100);
    };

    Panels.list = list;
    Panels.visible_panels = visible_panels;
    Panels.visible_panels_name = visible_panels_name;
    Panels.current_visible_index = current_visible_index;
    Panels.left_panel = left_panel;
    Panels.right_panel = right_panel;
    Panels.getVisible = getVisible;
    Panels.save = save;
    Panels.restore = restore;
    Panels.savecontent = savecontent;
    Panels.getHighlightLines = getHighlightLines;
    Panels.focus = focus;
    Panels.updateQuery = updateQuery;
    Panels.distribute = distribute;
    Panels.show = show;
    Panels.hide = hide;
    Panels.hideAll = hideAll;
    Panels.allEditors = allEditors;

    setup();

    return Panels;
  })();

  module.exports = jsbin.panels = Panels;
})();
