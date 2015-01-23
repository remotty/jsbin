/*global */
/**
 * Utilities & polyfills
 */

var Utils = (function(){
  'use strict';
  
  var prependChild = function(elem, child) { elem.insertBefore(child, elem.firstChild); };

  var addEvent = function(elem, event, fn) {
    if (elem.addEventListener) {
      elem.addEventListener(event, fn, false);
    } else {
      elem.attachEvent("on" + event, function() {
        // set the this pointer same as addEventListener when fn is called
        return(fn.call(elem, window.event));
      });
    }
  };

  var redirect = function(){
    if (!window.location.origin) {
      window.location.origin = window.location.protocol+"//"+window.location.host;
    }
  };

  var throttle = function (fn, delay) {
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
  };

  var cleanse = function (s) {
    return (s||'').replace(/[<&]/g, function (m) { return {'&':'&amp;','<':'&lt;'}[m];});
  };

  var getIframeWindow = function (iframeElement) {
    return iframeElement.contentWindow || iframeElement.contentDocument.parentWindow;
  };

  return {
    prependChild: prependChild,
    addEvent: addEvent,
    redirect: redirect,
    throttle: throttle,
    cleanse: cleanse,
    getIframeWindow: getIframeWindow
  };
})();

Utils.redirect();

var prependChild = Utils.prependChild;
var addEvent = Utils.addEvent;
var throttle = Utils.throttle;
var cleanse = Utils.cleanse;
var getIframeWindow = Utils.getIframeWindow;
