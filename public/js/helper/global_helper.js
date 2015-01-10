/* globals $:true, jsbin:true, store:true, saveChecksum:true */

var GlobalHelper = (function(){
  'use strict';
  
  var $window = $(window);
  var $body = $('body');
  var $document = $(document);
  var $bin = $('#bin');
  var $source = $('#source');
  var $library = $('#library');
  var $live = $('#live');
  var debug = jsbin.settings.debug === undefined ? false : jsbin.settings.debug;
  var documentTitle = 'JS Bin';
  var loadGist;

  var editorModes = {
    html: 'htmlmixed',
    javascript: 'javascript',
    css: 'css',
    typescript: 'javascript',
    markdown: 'markdown',
    coffeescript: 'coffeescript',
    livescript: 'text/x-livescript',
    jsx: 'javascript',
    less: 'text/x-less',
    sass: 'text/x-sass',
    scss: 'text/x-scss',
    processing: 'text/x-csrc',
    jade: 'text/x-jade',
    csv: 'text'
  };
  
  function throttle(fn, delay) {
    var timer = null;
    var throttled = function () {
      var context = this, args = arguments;
      throttled.cancel();
      throttled.timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };

    throttled.cancel = function () {
      clearTimeout(throttled.timer);
    };

    return throttled;
  }

  function debounceAsync(fn) {
    var waiting = false;
    var last = null;

    return function debouceRunner() {
      var args = [].slice.call(arguments, 0);
      // console.time('tracker');

      var tracker = function () {
        waiting = false;
        // console.timeEnd('tracker');
        if (last) {
          // console.log('applying the last');
          fn.apply(last.context, last.args);
          // console.log('and now clear');
          last = null;
        }
      };

      // put the tracker in place of the callback
      args.push(tracker);

      if (!waiting) {
        // console.log('running this time...');
        waiting = true;
        return fn.apply(this, args);
      } else {
        // console.log('going to wait...');
        last = { args: args, context: this };
      }
    };
  }

  function escapeHTML(html){
    return String(html)
      .replace(/&(?!\w+;)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function dedupe(array) {
    var hash    = {},
        results = [],
        hasOwn  = Object.prototype.hasOwnProperty,
        i, item, len;

    for (i = 0, len = array.length; i < len; i += 1) {
      item = array[i];

      if (!hasOwn.call(hash, item)) {
        hash[item] = 1;
        results.push(item);
      }
    }

    return results;
  }

  function isDOM(obj) {
    var Node = window.Node || false;
    if (Node) {
      return obj instanceof Node;
    }
    return obj.nodeType === 1;
  }

  function exposeSettings() {
    function mockEditor (editor, methods) {
      return methods.reduce(function (mockEditor, method) {
        mockEditor[method] = editor[method].bind(editor);
        return mockEditor;
      }, {});
    }

    function mockPanels() {
      var results = {};
      var panels = jsbin.panels.panels;
      ['css', 'javascript', 'jasmine', 'html'].forEach(function (type) {
        results[type] = {
          setCode: panels[type].setCode.bind(panels[type]),
          getCode: panels[type].getCode.bind(panels[type]),
          editor: mockEditor(panels[type].editor, [
            'setCursor',
            'getCursor',
            'addKeyMap',
            'on'
          ])
        };
      });

      return results;
    }

    if (isDOM(window.jsbin) || !window.jsbin) { // because...STUPIDITY!!!
      window.jsbin = {
        'static': jsbin['static'],
        version: jsbin.version,
        embed: jsbin.embed,
        panels: {
          // FIXME decide whether this should be locked down further
          panels: mockPanels()
        }
      }; // create the holding object

      if (jsbin.state.metadata && jsbin.user && jsbin.state.metadata.name === jsbin.user.name && jsbin.user.name) {
        window.jsbin.settings = jsbin.settings;
        return;
      }

      var key = 'o' + (Math.random() * 1).toString(32).slice(2);
      Object.defineProperty(window, key, {
        get:function () {
          window.jsbin.settings = jsbin.settings;
          console.log('jsbin.settings can now be modified on the console');
        }
      });
      if (!jsbin.embed) {
        console.log('To edit settings, type this string into the console: ' + key);
      }
    }
  }

  function objectValue(path, context) {
    var props = path.split('.'),
        length = props.length,
        i = 1,
        currentProp = context || window,
        value = currentProp[path];
    try {
      if (currentProp[props[0]] !== undefined) {
        currentProp = currentProp[props[0]];
        for (; i < length; i++) {
          if (currentProp[props[i]] === undefined) {
            break;
          } else if (i === length - 1) {
            value = currentProp[props[i]];
          }
          currentProp = currentProp[props[i]];
        }
      }
    } catch (e) {
      value = undefined;
    }

    return value;
  }

  var unload = function () {
    store.sessionStorage.setItem('url', jsbin.getURL());
    store.localStorage.setItem('settings', JSON.stringify(jsbin.settings));

    if (jsbin.panels.saveOnExit === false) {
      return;
    }

    jsbin.panels.save();
    jsbin.panels.savecontent();

    var panel = jsbin.panels.focused;
    if (panel) {
      store.sessionStorage.setItem('panel', panel.id);
    }
  };

  function sendReload() {
    if (saveChecksum) {
      $.ajax({
        url: jsbin.getURL() + '/reload',
        data: {
          code: jsbin.state.code,
          revision: jsbin.state.revision,
          checksum: saveChecksum
        },
        type: 'post'
      });
    }
  }
  
  return {
    $window: $window,
    $body: $body,
    $document: $document,
    $bin: $bin,
    $source: $source,
    $library: $library,
    $live: $live,

    editorModes: editorModes,
    
    debug: debug,
    documentTitle: documentTitle,
    loadGist: loadGist,
    unload: unload,
    
    throttle: throttle,
    debounceAsync: debounceAsync,
    escapeHTML: escapeHTML,
    dedupe: dedupe,
    isDOM: isDOM,
    exposeSettings: exposeSettings,
    objectValue: objectValue,
    
    sendReload: sendReload
  };
})();

var $window = GlobalHelper.$window;
var $body = GlobalHelper.$body;
var $document = GlobalHelper.$document;
var $bin = GlobalHelper.$bin;
var $source = GlobalHelper.$source;
var $library = GlobalHelper.$library;
var $live = GlobalHelper.$live;

var editorModes = GlobalHelper.editorModes;

var debug = GlobalHelper.debug;
var documentTitle = GlobalHelper.documentTitle;
var loadGist = GlobalHelper.loadGist;
var unload = GlobalHelper.unload;

var throttle = GlobalHelper.throttle;
var debounceAsync = GlobalHelper.debounceAsync;
var escapeHTML = GlobalHelper.escapeHTML;
var dedupe = GlobalHelper.dedupe;
var isDOM = GlobalHelper.isDOM;
var exposeSettings = GlobalHelper.exposeSettings;
var objectValue = GlobalHelper.objectValue;

var sendReload = GlobalHelper.sendReload;
