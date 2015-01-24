/*global $, Backbone */

var Navigation = require('../../js/chrome/navigation');

var InfocardView = (function(){
  'use strict';
  
  return Backbone.View.extend({
    el: '#infocard',
    events: {
      'click a.deletebin': 'deleteBin',
    },
    deleteBin: function(event){
      event.preventDefault();
      
      if (confirm('Delete this bin?')) {
        Navigation.deleteBin();
      }
    }
  });
})();

new InfocardView();
