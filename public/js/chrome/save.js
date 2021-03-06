/*global $, jsbin, vex, module, export */

var helper = require('../helper/global_helper');
var store = require('../chrome/storage');
var Panels = require('../editors/panels');
var analytics = require('./analytics');
// var editors = require('../editors/editors');

module.exports = (function(){
  'use strict';
  
  var saving = {
    todo: {
      html: false,
      css: false,
      javascript: false,
      spec: false,
      dataset: false
    },
    _inprogress: false,
    inprogress: function (inprogress) {
      if (typeof inprogress === 'undefined') {
        return saving._inprogress;
      }

      saving._inprogress = inprogress;
      if (inprogress === false) {
        var panels = ['html','css','javascript', 'spec', 'dataset'];

        var save = function () {
          var todo = panels.pop();
          if (todo && saving.todo[todo]) {
            saving._inprogress = true;
            updateCode(todo, save);
            saving.todo[todo] = false;
          } else if (todo) {
            save();
          }
        };

        save();
      }
    }
  };

  // to allow for download button to be introduced via beta feature
  $('a.save').click(function (event) {
    event.preventDefault();

    analytics.milestone();
    // if save is disabled, hitting save will trigger a reload
    var ajax = true;
    if (jsbin.saveDisabled === true) {
      ajax = false;
    }
    saveCode('save', ajax);

    return false;
  });

  var $shareLinks = $('#share .link');
  var $panelCheckboxes = $('#sharemenu #sharepanels input');

  // TODO remove split when live
  var split = $('#sharemenu .share-split').length;

  // TODO candidate for removal
  function updateSavedState() {
    if (split) {
      return;
    }

    var mapping = {
      live: 'output',
      javascript: 'js',
      css: 'css',
      html: 'html',
      console: 'console'
    };

    var withRevision = true;

    var query = $panelCheckboxes.filter(':checked').map(function () {
      return mapping[this.getAttribute('data-panel')];
    }).get().join(',');
    $shareLinks.each(function () {
      var path = this.getAttribute('data-path');
      var url = jsbin.getURL({ withRevision: withRevision }) + path + (query && this.id !== 'livepreview' ? '?' + query : ''),
          nodeName = this.nodeName;
      var hash = Panels.getHighlightLines();

      if (hash) {
        hash = '#' + hash;
      }

      if (nodeName === 'A') {
        this.href = url;
      } else if (nodeName === 'INPUT') {
        this.value = url;
        if (path === '/edit') {
          this.value += hash;
        }
      } else if (nodeName === 'TEXTAREA') {
        this.value = ('<a class="jsbin-embed" href="' + url + hash + '">' + helper.documentTitle + '</a><' + 'script src="' + jsbin.static + '/js/chrome/embed.js"><' + '/script>').replace(/<>"&/g, function (m) {
          return {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '&': '&amp;'
          }[m];
        });
      }
    });
  }

  $('#sharemenu').bind('open', updateSavedState);
  $('#sharebintype input[type=radio]').on('click', function () {
    if (this.value === 'snapshot') {
      jsbin.state.checksum = false;
      saveChecksum = false;
    }
    updateSavedState();
  });

  helper.$document.on('saved', function () {
    updateSavedState();

    $('#sharebintype input[type=radio][value="realtime"]').prop('checked', true);

    $shareLinks.closest('.menu').removeClass('hidden');

    $('#jsbinurl').attr('href', jsbin.getURL()).removeClass('hidden');
    $('#clone').removeClass('hidden');
  });

  var saveChecksum = jsbin.state.checksum || store.sessionStorage.getItem('checksum') || false;

  // store it back on state
  jsbin.state.checksum = saveChecksum;

  if (saveChecksum) {
    // remove the disabled class, but also remove the cancelling event handlers
    $('#share div.disabled').removeClass('disabled').unbind('click mousedown mouseup');
  } else {
    $('#share div.disabled').one('click', function (event) {
      event.preventDefault();
      $('a.save').click();
    });
  }

  helper.$document.one('saved', function () {
    $('#share div.disabled').removeClass('disabled').unbind('click mousedown mouseup');
  });

  function onSaveError(jqXHR, panelId) {
    if (jqXHR.status === 413) {
      // Hijack the tip label to show an error message.
      $('#tip p').html('Sorry this bin is too large for us to save');
      $(document.documentElement).addClass('showtip');
    } else if (jqXHR.status === 403) {
      helper.$document.trigger('tip', {
        type: 'error',
        content: 'I think there\'s something wrong with your session and I\'m unable to save. <a href="' + window.location + '"><strong>Refresh to fix this</strong></a>, you <strong>will not</strong> lose your code.'
      });
    } else if (panelId) {
      if (panelId) { savingLabels[panelId].text('Saving...').animate({ opacity: 1 }, 100); }
      window._console.error({message: 'Warning: Something went wrong while saving. Your most recent work is not saved.'});
    }
  }



  // only start live saving it they're allowed to (whereas save is disabled if they're following)
  if (!jsbin.saveDisabled) {
    $('.code.panel .label .name').append('<span>Saved</span>');
    
    var savingLabels = {
      html: $('.panel.html .name span'),
      javascript: $('.panel.javascript .name span'),
      css: $('.panel.css .name span'),
      spec: $('.panel.jasmine .name span'),
      dataset: $('.panel.dataframe .name span'),
    };
    
    helper.$document.bind('jsbinReady', function () {
      jsbin.panels.allEditors(function (panel) {
        panel.on('processor', function () {
          // if the url doesn't match the root - i.e. they've actually saved something then save on processor change
          if (jsbin.root !== jsbin.getURL()) {
            helper.$document.trigger('codeChange', [{ panelId: panel.id }]);
          }
        });
      });

      helper.$document.bind('codeChange', function (event, data) {
        // savingLabels[data.panelId].text('Saving');
        if (savingLabels[data.panelId]) {
          savingLabels[data.panelId].css({ 'opacity': 0 }).stop(true, true);
        }
      });

      helper.$document.bind('saveComplete', helper.throttle(function (event, data) {
        // show saved, then revert out animation

        savingLabels[data.panelId]
          .text('Saved')
          .stop(true, true)
          .animate({ opacity: 1 }, 100)
          .delay(1200)
          .animate({ opacity: 0 }, 500);
      }, 500));

      helper.$document.bind('codeChange', helper.throttle(function (event, data) {
        if (!data.panelId) {
          return;
        }

        if (jsbin.state.deleted) {
          return;
        }

        var panelId = data.panelId;
        jsbin.panels.savecontent();

        if (saving.inprogress()) {
          // queue up the request and wait
          saving.todo[panelId] = true;
          return;
        }

        saving.inprogress(true);

        // We force a full save if there's no checksum OR if there's no bin code/url
        if (!saveChecksum || !jsbin.state.code) {
          // create the bin and when the response comes back update the url
          saveCode('save', true);
        } else {
          updateCode(panelId);
        }
      }, 250));
    });
  } else {
    helper.$document.one('jsbinReady', function () {
      var shown = false;
      if (!jsbin.embed && !jsbin.sandbox) {
        helper.$document.on('codeChange.live', function (event, data) {
          if (!data.onload && !shown && data.origin !== 'setValue') {
            shown = true;
            var ismac = navigator.userAgent.indexOf(' Mac ') !== -1;
            var cmd = ismac ? '⌘' : 'ctrl';
            var shift = ismac ? '⇧' : 'shift';
            var plus = ismac ? '' : '+';

            helper.$document.trigger('tip', {
              type: 'notification',
              content: 'You\'re currently viewing someone else\'s live stream, but you can <strong><a class="clone" href="' + jsbin.root + '/clone">clone your own copy</a></strong> (' + cmd + plus + shift + plus + 'S) at any time to save your edits'
            });
          }
        });
      }
    });
  }

  function compressKeys(keys, obj) {
    obj.compressed = keys;
    keys.split(',').forEach(function (key) {
      obj[key] = LZString.compressToUTF16(obj[key]);
    });
  }

  function updateCode(panelId, callback) {
    var panelSettings = {};
    var panelName;

    if (panelId === 'jasmine'){
      panelName = 'spec';
    }else if (panelId === 'dataframe'){
      panelName = 'dataset';
    }else{
      panelName = panelId;
    }
    
    if (jsbin.state.processors) {
      panelSettings.processors = jsbin.state.processors;
    }

    var data = {
      code: jsbin.state.code,
      revision: jsbin.state.revision,
      method: 'update',
      panel: panelName,
      content: Panels.panels[panelId].getCode(),
      checksum: saveChecksum,
      settings: JSON.stringify(panelSettings),
    };

    if (jsbin.settings.useCompression) {
      compressKeys('content', data);
    }

    var update = function(){
      $.ajax({
        url: jsbin.getURL({ withRevision: true }) + '/save',
        data: data,
        type: 'post',
        dataType: 'json',
        headers: {'Accept': 'application/json'},
        success: function (data) {
          helper.$document.trigger('saveComplete', { panelId: panelId });
          if (data.error) {
            saveCode('save', true, function () {
              // savedAlready = data.checksum;
            });
          } else {
            jsbin.state.latest = true;
          }
        },
        error: function (jqXHR) {
          onSaveError(jqXHR, panelId);
        },
        complete: function () {
          saving.inprogress(false);
          if (callback) { callback(); }
        }
      });
    };

    update();
  }

  $('a.clone').click(clone);
  $('#tip').delegate('a.clone', 'click', clone);

  function clone(event) {
    event.preventDefault();

    // save our panel layout - assumes our user is happy with this layout
    jsbin.panels.save();
    analytics.clone();

    var $form = setupform('save,new');
    $form.submit();

    return false;
  }

  function setupform(method) {
    var $form = $('form#saveform').empty()
          .append('<input type="hidden" name="javascript" />')
          .append('<input type="hidden" name="html" />')
          .append('<input type="hidden" name="css" />')
          .append('<input type="hidden" name="spec" />')
          .append('<input type="hidden" name="dataset" />')
          .append('<input type="hidden" name="method" />')
          .append('<input type="hidden" name="_csrf" value="' + jsbin.state.token + '" />')
          .append('<input type="hidden" name="settings" />')
          .append('<input type="hidden" name="checksum" />');

    var settings = {};

    if (jsbin.state.processors) {
      settings.processors = jsbin.state.processors;
    }

    // this prevents new revisions forking off the welcome bin
    // because it's looking silly!
    if (jsbin.state.code === 'welcome') {
      $form.attr('action', '/save');
    }

    $form.find('input[name=settings]').val(JSON.stringify(settings));
    $form.find('input[name=javascript]').val(Panels.panels.javascript.getCode());
    $form.find('input[name=css]').val(Panels.panels.css.getCode());
    $form.find('input[name=html]').val(Panels.panels.html.getCode());
    $form.find('input[name=spec]').val(Panels.panels.jasmine.getCode());
    $form.find('input[name=dataset]').val(Panels.panels.dataframe.getCode());
    $form.find('input[name=method]').val(method);
    $form.find('input[name=checksum]').val(jsbin.state.checksum);

    return $form;
  }

  function pad(n){
    return n<10 ? '0'+n : n;
  }

  function ISODateString(d){
    return d.getFullYear()+'-'+
      pad(d.getMonth()+1)+'-'+
      pad(d.getDate())+'T'+
      pad(d.getHours())+':'+
      pad(d.getMinutes())+':'+
      pad(d.getSeconds())+'Z';
  }

  function saveCode(method, ajax, ajaxCallback) {
    // create form and post to it
    var $form = setupform(method);
    // save our panel layout - assumes our user is happy with this layout
    jsbin.panels.save();
    jsbin.panels.saveOnExit = true;

    var data = $form.serializeArray().reduce(function(obj, data) {
      obj[data.name] = data.value;
      return obj;
    }, {});

    data.url = $.cookie('new-bin-name');
    
    if (jsbin.settings.useCompression) {
      compressKeys('html,css,javascript', data);
    }
    
    var save = function(){
      if (ajax) {
        $.ajax({
          url: $form.attr('action'),
          data: data,
          dataType: 'json',
          type: 'post',
          headers: {'Accept': 'application/json'},
          success: function (data) {
            if (ajaxCallback) {
              ajaxCallback(data);
            }

            store.sessionStorage.setItem('checksum', data.checksum);
            saveChecksum = data.checksum;

            jsbin.state.checksum = saveChecksum;
            jsbin.state.code = data.code;
            jsbin.state.revision = data.revision;
            jsbin.state.latest = true; // this is never not true...end of conversation!
            jsbin.state.metadata = { name: jsbin.user.name };
            $form.attr('action', jsbin.getURL({ withRevision: true }) + '/save');

            if (window.history && window.history.pushState) {
              // updateURL(edit);
              var hash = Panels.getHighlightLines();
              if (hash) {hash = '#' + hash;}
              // If split is truthy (> 0) then we are using the revisonless feature
              // this is temporary until we release the feature!
              window.history.pushState(null, '', jsbin.getURL({withRevision: !split}) + '/edit' + hash);
              store.sessionStorage.setItem('url', jsbin.getURL({withRevision: !split}));
            } else {
              window.location.hash = data.edit;
            }

            helper.$document.trigger('saved');
          },
          error: function (jqXHR) {
            onSaveError(jqXHR, null);
          },
          complete: function () {
            saving.inprogress(false);
          }
        });
      } else {
        $form.submit();
      }
    };

    if($.cookie('new-bin-name') || jsbin.state.revision !== null){
      save();
      $.removeCookie('new-bin-name');
    }else{
      helper.$document.trigger('tip', {
        type: 'notication',
        content: 'The name of bin is not set. <input type="button" id="set-name" value="Set name"></div>',
        callback: function(){
          $('#set-name').click(function(event){
            vex.dialog.prompt({
              message: 'What is name of new bin?',
              placeholder: 'Name of bin',
              className: 'vex-theme-os',
              callback: function(value) {
                $.cookie('new-bin-name', value);
                $('a.dismiss').trigger('click');
              }
            });  
          });
          
        }
      });
    }
  }

  return {
    saveChecksum: saveChecksum,
    updateSavedState: updateSavedState,
    split: split
  };
})();
