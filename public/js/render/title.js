/*global jsbin, $ */

var helper = require('../helper/global_helper');

module.exports = (function(){
  'use strict';
  
  function updateTitle(source) {
    if (source === undefined) {
      source = jsbin.panels.panels.html.getCode();
    }
    // read the element out of the source code and plug it in to our document.title
    var newDocTitle = source.match(re);
    if (newDocTitle !== null && newDocTitle[1] !== helper.documentTitle) {
      lastState = jsbin.state.latest;
      documentTitle = $('<div>').html(newDocTitle[1].trim()).text(); // jshint ignore:line
      if (helper.documentTitle) {
        document.title = helper.documentTitle + ' - ' + 'JS Bin';

        // add the snapshot if not the latest
      } else {
        document.title = 'JS Bin';
      }


      if (!jsbin.state.latest && jsbin.state.revision) {
        document.title = '(#' + jsbin.state.revision + ') ' + document.title;
      }
    }

    // there's an edge case here if newDocTitle === null, it won't update to show
    // the snapshot, but frankly, it's an edge case that people won't notice.

  }

  var re = /<title>(.*)<\/title>/i;
  var lastState = null;

  return {
    updateTitle: updateTitle
  };
})();
