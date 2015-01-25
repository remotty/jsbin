/*global $, Backbone */

var beautify = require('../../js/editors/beautify');

var DocumentView = (function(){
  'use strict';
  
  return Backbone.View.extend({
    el: 'body',
    events: {
      'keydown': 'keydown',
    },
    keydown: function(event){
      var ctrlKey = $.browser.platform === 'mac' ? 'metaKey' : 'ctrlKey';
      var keycodeOfL = 76;

      if (event[ctrlKey] && event.shiftKey && event.which == keycodeOfL) {
        beautify();
      }
    }
  });
})();

new DocumentView();
