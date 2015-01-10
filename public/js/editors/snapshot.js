/*globals $document, jsbin, updateTitle, saveChecksum*/

var Snapshot = (function(){
  'use strict';
  
  var setup = function(){
    if (testLocalStorage() && window.addEventListener) {
      watchForSnapshots();
    }
  };

  function watchForSnapshots() {
    $document.on('saved', function () {
      localStorage.latest = jsbin.state.code + '/' + jsbin.state.revision;
    });

    window.addEventListener('storage', function (event) {
      if (event.key === 'latest') {
        var parts = localStorage.latest.split('/');
        if (parts[0] === jsbin.state.code) {
          jsbin.state.latest = false;
          saveChecksum = false; // jshint ignore:line
          jsbin.state.checksum = false;
          updateTitle();
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

  return {
    setup: setup
  };
})();

Snapshot.setup();
