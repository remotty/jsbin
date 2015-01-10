/* globals sandbox:true, addEvent:true, runner:true */
/** =========================================================================
 * JS Bin Runner
 * ========================================================================== */

window.onload = function () {
  'use strict';
  
  /**
   * Live rendering, basic mode.
   * Fallback - load the bin into a new iframe, and let it keep itself up
   * to date using event stream.
   */
  if (!window.postMessage) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts');
    iframe.setAttribute('frameBorder', '0');
    document.body.appendChild(iframe);
    iframe.src = window.name;
    return;
  }

  /**
   * Live rendering, postMessage style.
   */

  // Set the sandbox target
  sandbox.target = document.getElementsByClassName('sandbox-wrapper')[0];
  // Hook into postMessage
  addEvent(window, 'message', runner.handleMessage);
};
