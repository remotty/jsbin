/*global $, setTimeout, clearTimeout */

var helper = require('../helper/global_helper');

(function () {
  'use strict';
  
  var $html = $(document.documentElement),
      $tip = $('#tip'),
      $tipContent = $('p', $tip),
      tipTimeout;

  var removeTip = function (cb) {
    $html.removeClass('showtip');
    $tip.removeClass();
    $tipContent.html('');
    helper.$window.resize();
    if (cb) { setTimeout(cb, 0); }
  };

  var setTip = function (data) {
    clearTimeout(tipTimeout);
    $tipContent.html(data.content);
    $tip.removeClass().addClass(data.type || 'info');
    $html.addClass('showtip');

    if(data.callback){
      data.callback();
    }
        
    if (!data.autohide) { return; }
    tipTimeout = setTimeout(function () {
      removeTip();
    }, parseInt(data.autohide, 10) || 5 * 1000);
  };

  /**
   * Trigger a tip to be shown.
   *
   *   $document.trigger('tip', 'You have an infinite loop in your HTML.');
   *
   *    $document.trigger('tip', {
   *      type: 'error',
   *      content: 'Do you even Javascript?',
   *      autohide: 8000
   *    });
   */
  helper.$document.on('tip', function (event, data, fn) {
    var tipData = data;
    if (typeof data === 'string') {
      tipData = {};
      tipData.content = data;
      tipData.type = 'info';
    }
    
    // If the content and the type haven't changed, just set it again.
    if ($tipContent.html() === tipData.content &&
        $tip.hasClass(tipData.type)) {
      return setTip(data);
    }
    
    removeTip(function () {
      setTip(tipData);
    });
    

  });

  $('#tip').on('click', 'a.dismiss', function () {
    removeTip();
    return false;
  });

  // Escape
  helper.$document.keydown(function (event) {
    if (event.which == 27) {
      removeTip();
    }
  });

}());
