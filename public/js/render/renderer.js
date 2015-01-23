/*global $, jsbin, CodeMirror */

/** ============================================================================
 * JS Bin Renderer
 * Messages to and from the runner.
 * ========================================================================== */

var helper = require('../helper/global_helper');
var store = require('../chrome/storage');
// var Navigation = require('../chrome/navigation');

var rendererCreator = function (target, is_test) {
  'use strict';
  
  var renderer = {};

  /**
   * Store what runner origin *should* be
   * TODO this should allow anything if x-origin protection should be disabled
   */
  renderer.runner = {};
  renderer.runner.origin = '*';

  /**
   * Setup the renderer
   */
  renderer.setup = function (runnerFrame) {
    renderer.runner.window = runnerFrame.contentWindow;
    renderer.runner.iframe = runnerFrame;
  };

  /**
   * Log error messages, indicating that it's from the renderer.
   */
  renderer.error = function () {
    // it's quite likely that the error that fires on this handler actually comes
    // from another service on the page, like a browser plugin, which we can
    // safely ignore.
    window.console.warn.apply(console, ['Renderer:'].concat([].slice.call(arguments)));
  };

  /**
   * Handle all incoming postMessages to the renderer
   */
  renderer.handleMessage = function (event) {
    if (!event.origin) { return; }
    var data = event.data;

    // specific change to handle reveal embedding
    try {
      if (event.data.indexOf('slide:') === 0 || event.data === 'jsbin:refresh') {
        // reset the state of the panel visibility
        jsbin.panels.allEditors(function (p) {
          p.visible = false;
        });
        jsbin.panels.restore();
        return;
      }
    } catch (e) {}

    try {
      data = JSON.parse(event.data);
    } catch (e) {
      return renderer.error('Error parsing event data:', e.message);
    }
    if (typeof renderer[data.type] !== 'function') {
      return renderer.error('No matching event handler:', data.type);
    }
    try {
      if (is_test && data.type === 'console') {
      }
      else {
      renderer[data.type](data.data);
      }
    } catch (e) {
      renderer.error(e.message);
    }
  };

  /**
   * Send message to the runner window
   */
  renderer.postMessage = function (type, data) {
    if (!renderer.runner.window) {
      return renderer.error('postMessage: No connection to runner window.');
    }

    renderer.runner.window.postMessage(JSON.stringify({
      type: type,
      data: data,
    }), renderer.runner.origin);
  };

  /**
   * When the renderer is complete, it means we didn't hit an initial
   * infinite loop
   */
  renderer.complete = function () {
    try {
      store.sessionStorage.removeItem('runnerPending');
    } catch (e) {}
  };

  /**
   * Pass loop protection hit calls up to the error UI
   */
  renderer.loopProtectHit = function (line) {
    var cm = jsbin.panels.panels.javascript.editor;
    // grr - more setTimeouts to the rescue. We need this to go in *after*
    // 'jshint does it's magic, but jshint set on a setTimeout, so we have to
    // schedule after.
    setTimeout(function () {
      var annotations = cm.state.lint.annotations || [];
      if (typeof cm.updateLinting !== 'undefined') {
        // note: this just updated the *source* reference
        annotations = annotations.filter(function (a) {
          return a.source !== 'loopProtectLine:' + line;
        });
        annotations.push({
          from: CodeMirror.Pos(line-1, 0),
          to: CodeMirror.Pos(line-1, 0),
          message: 'Exiting potential infinite loop.\nTo disable loop protection: add "// noprotect" to your code',
          severity: 'warning',
          source: 'loopProtectLine:' + line
        });

        cm.updateLinting(annotations);
      }
    }, cm.state.lint.options.delay || 0);
  };

  /**
   * When the iframe resizes, update the size text
   */
  renderer.resize = (function () {
    var size = target.find('.size');

    var hide = helper.throttle(function () {
      size.fadeOut(200);
    }, 2000);

    var embedResizeDone = false;

    return function (data) {
      if (!jsbin.embed) {
        // Display the iframe size in px in the JS Bin UI
        size.show().html(data.width + 'px');
        hide();
      }
      if (jsbin.embed && self !== top && embedResizeDone === false) {
        embedResizeDone = true;
        // Inform the outer page of a size change
        var height = (helper.$body.outerHeight(true) - $(renderer.runner.iframe).height()) + data.offsetHeight;
       window.parent.postMessage({ height: height }, '*');
      }
    };
  }());

  /**
   * When the iframe focuses, simulate that here
   */
  renderer.focus = function () {
    jsbin.panels.focus(jsbin.panels.panels.live);
    // also close any open dropdowns
    // Navigation.closedropdown();
  };

  /**
   * Proxy console logging to JS Bin's console
   */
  renderer.console = function (data) {
    var method = data.method,
        args = data.args;

    if (!window._console) {return;}
    if (!window._console[method]) {method = 'log';}

    // skip the entire console rendering if the console is hidden
    if (!jsbin.panels.panels.console.visible) { return; }

    window._console[method].apply(window._console, args);
  };

  /**
   * Load scripts into rendered iframe
   */
  renderer['console:load:script:success'] = function (url) {
    helper.$document.trigger('console:load:script:success', url);
  };

  renderer['console:load:script:error'] = function (err) {
    helper.$document.trigger('console:load:script:error', err);
  };

  /**
   * Load DOME into rendered iframe
   * TODO abstract these so that they are automatically triggered
   */
  renderer['console:load:dom:success'] = function (url) {
    helper.$document.trigger('console:load:dom:success', url);
  };

  renderer['console:load:dom:error'] = function (err) {
    helper.$document.trigger('console:load:dom:error', err);
  };

  return renderer;

};

module.exports = {
  renderer: rendererCreator($('#live'), false),
  rendererTest: rendererCreator($('#livetest'), true)
};
