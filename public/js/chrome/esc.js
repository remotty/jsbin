/*global $, module, require */

var helper = require('../helper/global_helper');
var analytics = require('./analytics');

module.exports = (function(){
  'use strict';

  var loginVisible = false;
  var dropdownOpen = false;
  var keyboardHelpVisible = false;
  var urlHelpVisible = false;

  var hideOpen = function() {
    if (urlHelpVisible) {
      helper.$body.removeClass('urlHelp');
      urlHelpVisible = false;
      analytics.closeMenu('help');
    } else if (keyboardHelpVisible) {
      helper.$body.removeClass('keyboardHelp');
      keyboardHelpVisible = false;
      analytics.closeMenu('keyboardHelp');
    } else if (dropdownOpen) {
      closedropdown();
    } else if (loginVisible) {
      $('#login').hide();
      analytics.closeMenu('login');
      loginVisible = false;
    }
  };

  var setup = function(){
    helper.$document.keydown(function (event) {
      if (event.which == 27) {//} || (keyboardHelpVisible && event.which == 191 && event.shiftKey && event.metaKey)) {
        hideOpen();
      }
    });

    helper.$document.delegate('.modal', 'click', function (event) {
      if ($(event.target).is('.modal')) {
        hideOpen();
      }
    });
  };

  setup();
  
  return {
    loginVisible: loginVisible,
    dropdownOpen: dropdownOpen,
    keyboardHelpVisible: keyboardHelpVisible,
    urlHelpVisible: urlHelpVisible,
    setup: setup
  };
})();

