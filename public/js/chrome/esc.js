var ESC = (function(){
  'use strict';
  
  var loginVisible = false;
  var dropdownOpen = false;
  var keyboardHelpVisible = false;
  var urlHelpVisible = false;

  var hideOpen = function() {
    if (urlHelpVisible) {
      $body.removeClass('urlHelp');
      urlHelpVisible = false;
      analytics.closeMenu('help');
    } else if (keyboardHelpVisible) {
      $body.removeClass('keyboardHelp');
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
    $document.keydown(function (event) {
      if (event.which == 27) {//} || (keyboardHelpVisible && event.which == 191 && event.shiftKey && event.metaKey)) {
        hideOpen();
      }
    });

    $document.delegate('.modal', 'click', function (event) {
      if ($(event.target).is('.modal')) {
        hideOpen();
      }
    });
  };
  return {
    loginVisible: loginVisible,
    dropdownOpen: dropdownOpen,
    keyboardHelpVisible: keyboardHelpVisible,
    urlHelpVisible: urlHelpVisible,
    setup: setup
  };
})();

var loginVisible = ESC.loginVisible;
var dropdownOpen = ESC.dropdownOpen;
var keyboardHelpVisible = ESC.keyboardHelpVisible;
var urlHelpVisible = ESC.urlHelpVisible;

ESC.setup();
