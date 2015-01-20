/*global jsbin */

var helper = require('../helper/global_helper');
var saveChecksum = require('../helper/global_helper').saveChecksum;
var title = require('../render/title');
var localStorage = require('../chrome/storage').localStorage;

(function(){
  'use strict';
  
  var setup = function(){
    if (testLocalStorage() && window.addEventListener) {
      watchForSnapshots();
    }
  };

  function watchForSnapshots() {
    helper.$document.on('saved', function () {
      localStorage.latest = jsbin.state.code + '/' + jsbin.state.revision;
    });

    window.addEventListener('storage', function (event) {
      if (event.key === 'latest') {
        var parts = localStorage.latest.split('/');
        if (parts[0] === jsbin.state.code) {
          jsbin.state.latest = false;
          saveChecksum = false; // jshint ignore:line
          jsbin.state.checksum = false;
          title.updateTitle();
          window.history.replaceState(null, null, jsbin.getURL() + '/edit');
        }
      }
    });
  }

  function testLocalStorage() {
    try {
      if ('localStorage' in window && window['localStorage'] !== null) { // jshint ignore:line
        return true;
      }
    } catch(e){
      return false;
    }
  }

  setup();
})();

