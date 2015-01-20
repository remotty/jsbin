/*global jsbin, $*/

var localStorage = require('../chrome/storage').localStorage;

module.exports = (function() {
  'use strict';
  
  return {
    save: function () {
      localStorage.setItem('settings', JSON.stringify(jsbin.settings));

      $.ajax({
        url: '/account/editor',
        type: 'POST',
        dataType: 'json',
        data: {
          settings: localStorage.settings,
          _csrf: jsbin.state.token
        },
        success: function() {
          if (console && console.log) {
            console.log('Success on saving settings');
          }
        },
        error: function(xhr, status) {
          if (console && console.log) {
            console.log('Error: ' + status);
          }
        }
      });
    }
  };
})();
