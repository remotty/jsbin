/*global jsbin, $ */

var helper = require('../helper/global_helper');
var analytics = require('./analytics');

module.exports = (function(){
  'use strict';
  
  function archive(unarchive) {
    var type = unarchive === false ? 'unarchive' : 'archive';
    var text = unarchive === false ? 'restore from archive' : 'archiving';
    analytics[type](jsbin.getURL({ withRevision: true }));
    if (!jsbin.user.name) {
      helper.$document.trigger('tip', {
        type: 'notication',
        content: 'You must be logged in and the owner of the bin to archive.'
      });
    } else if (jsbin.owner()) {
      $.ajax({
        type: 'POST',
        url: jsbin.getURL({ withRevision: true }) + '/' + type,
        error: function () {
          helper.$document.trigger('tip', {
            type: 'error',
            content: 'The ' + text + ' failed. If this continues, please can you file an issue?'
          });
        },
        success: function () {
          jsbin.state.metadata.archive = unarchive !== false;
          updateArchiveMenu();
          helper.$document.trigger('tip', {
            type: 'notication',
            autohide: 5000,
            content: 'This bin is now ' + (unarchive === false ? 'restored from the archive.' : 'archived.')
          });
        }
      });
    } else {
      helper.$document.trigger('tip', {
        type: 'notication',
        content: 'The ' + text + ' failed. You can only archive bins that you own.'
      });
    }
  }

  function updateArchiveMenu() {
    if (jsbin.state.metadata && jsbin.state.metadata.archive) {
      $('a.archivebin').hide();
      $('a.unarchivebin').show();
    } else {
      $('a.archivebin').show();
      $('a.unarchivebin').hide();
    }
  }

  updateArchiveMenu();
  var unarchive = archive.bind(null, false);
  return {
    archive: archive,
    unarchive: unarchive
  };
})();
