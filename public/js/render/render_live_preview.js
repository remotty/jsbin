/** ============================================================================
 * Live rendering.
 *
 * Comes in two tasty flavours. Basic mode, which is essentially an IE7
 * fallback. Take a look at https://github.com/jsbin/jsbin/issues/651 for more.
 * It uses the iframe's name and JS Bin's event-stream support to keep the
 * page up-to-date.
 *
 * The second mode uses postMessage to inform the runner of changes to code,
 * config and anything that affects rendering, and also listens for messages
 * coming back to update the JS Bin UI.
 * ========================================================================== */

/**
 * Render live preview.
 * Create the runner iframe, and if postMe wait until the iframe is loaded to
 * start postMessaging the runner.
 */
var renderLivePreviewCreator = function (target, renderer, is_test,
                                         has_event) {
  'use strict';
  
  var deferCallable = function (newFn, trigger) {
    var args,
        pointerFn = function () {
          // Initially, the pointer basically does nothing, waiting for the
          // trigger to fire, but we save the arguments that wrapper was called
          // with so that they can be passed to the newFn when it's ready.
          args = [].slice.call(arguments);
        };

    // Immediately call the trigger so that the user can inform us of when
    // the newFn is callable.
    // When it is, swap round the pointers and, if the wrapper was aleady called,
    // immediately call the pointerFn.
    trigger(function () {
      pointerFn = newFn;
      if (args) {
        pointerFn.apply(null, args);
      }
    });

    // Wrapper the pointer function. This means we can swap pointerFn around
    // without breaking external references.
    return function wrapper() {
      return pointerFn.apply(null, [].slice.call(arguments));
    };
  };
  
  // Runner iframe
  var iframe;

  var htmlGenerator = (is_test ? getPreparedTest : getPreparedCode);
  
  // Basic mode
  // This adds the runner iframe to the page. It's only run once.
  if (!target.find('iframe').length) {
    iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'stretch');
    iframe.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts');
    iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('name', '<proxy>');
    target.prepend(iframe);
    
    iframe.src = jsbin.runner;
    
    try {
      iframe.contentWindow.name = '/' + jsbin.state.code + '/' + jsbin.state.revision;
    } catch (e) {
      // ^- this shouldn't really fail, but if we're honest, it's a fucking mystery as to why it even works.
      // problem is: if this throws (because iframe.contentWindow is undefined), then the execution exits
      // and `var renderLivePreview` is set to undefined. The knock on effect is that the calls to renderLivePreview
      // then fail, and jsbin doesn't boot up. Tears all round, so we catch.
    }
  }

  // The big daddy that handles postmessaging the runner.
  var renderLivePreview = function (requested) {
    // No postMessage? Don't render – the event-stream will handle it.
    if (!window.postMessage) { return; }

    // Inform other pages event streaming render to reload
    if (requested) { sendReload(); }

    htmlGenerator().then(function (source) {
      var includeJsInRealtime = jsbin.settings.includejs;

      // Tell the iframe to reload
      var visiblePanels = jsbin.panels.getVisible();
      var outputPanelOpen = visiblePanels.indexOf(jsbin.panels.panels.live) > -1;
      var consolePanelOpen = visiblePanels.indexOf(jsbin.panels.panels.console) > -1;
      if (!outputPanelOpen && !consolePanelOpen) {
        return;
      }
      // this is a flag that helps detect crashed runners
      if (jsbin.settings.includejs) {
        store.sessionStorage.setItem('runnerPending', 1);
      }

      renderer.postMessage('render', {
        source: source,
        options: {
          requested: requested,
          debug: jsbin.settings.debug,
          includeJsInRealtime: jsbin.settings.includejs
        }
      });

    });
  };

  /**
   * Events
   */
  
  if (has_event) {
    $document.on('codeChange.live', function (event, arg) {
      if (arg.origin === 'setValue' || arg.origin === undefined) {
        return;
      }
      store.sessionStorage.removeItem('runnerPending');
    });

    // Listen for console input and post it to the iframe
    $document.on('console:run', function (event, cmd) {
      renderer.postMessage('console:run', cmd);
    });

    $document.on('console:load:script', function (event, url) {
      renderer.postMessage('console:load:script', url);
    });

    $document.on('console:load:dom', function (event, html) {
      renderer.postMessage('console:load:dom', html);
    });
  }

  // When the iframe loads, swap round the callbacks and immediately invoke
  // if renderLivePreview was called already.
  return deferCallable(throttle(renderLivePreview, 200), function (done) {
    iframe.onload = function () {
      if (window.postMessage) {
        $window.on('message', function (event) {
          renderer.handleMessage(event.originalEvent);
        });
        renderer.setup(iframe);
      }
      done();
    };
  });

  /**
   * Defer callable. Kinda tricky to explain. Basically:
   *  "Don't make newFn callable until I tell you via this trigger callback."
   *
   * Example:

   // Only start logging after 3 seconds
   var log = function (str) { console.log(str); };
   var deferredLog = deferCallable(log, function (done) {
   setTimeout(done, 3000);
   });

   setInterval(function () {
   deferredLog(Date.now(), 500);
   });

   */
  
};

var renderLiveViewPreview = renderLivePreviewCreator($('#live'), renderer, false, true);
var renderLiveTestPreview = renderLivePreviewCreator($('#livetest'), rendererTest, true, false);

var renderLivePreview = function(args){
  'use strict';
  
  renderLiveViewPreview(args);
  
  // Test output panel use lazy evaluation
  // renderLiveTestPreview(args);
};
