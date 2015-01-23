/*global $, module, require */

var helper = require('../helper/global_helper');
var analytics = require('../chrome/analytics');
// var navigation = require('../chrome/navigation');

(function(){
  'use strict';

  var ESC = (function(){
    var ESC = function(){};

    ESC.loginVisible = false;
    ESC.dropdownOpen = false;
    ESC.keyboardHelpVisible = false;
    ESC.urlHelpVisible = false;

    var hideOpen = function() {
      if (ESC.urlHelpVisible) {
        helper.$body.removeClass('urlHelp');
        ESC.urlHelpVisible = false;
        analytics.closeMenu('help');
      } else if (ESC.keyboardHelpVisible) {
        helper.$body.removeClass('keyboardHelp');
        ESC.keyboardHelpVisible = false;
        analytics.closeMenu('keyboardHelp');
      } else if (ESC.dropdownOpen) {
        // navigation.closedropdown(); 
      } else if (ESC.loginVisible) {
        $('#login').hide();
        analytics.closeMenu('login');
        ESC.loginVisible = false;
      }
    };

    helper.$document.keydown(function (event) {
      if (event.which == 27) {
        hideOpen();
      }
    });

    helper.$document.delegate('.modal', 'click', function (event) {
      if ($(event.target).is('.modal')) {
        hideOpen();
      }
    });

    return ESC;
  })();

  module.exports = ESC;
})();

