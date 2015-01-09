/*globals objectValue, $, jsbin, $body, $document, saveChecksum, jsconsole*/

Keycontrol = (function(){
  var KEYCODE = {
    'ESC': 27,
    '0': 48,
    '9': 57,
    '.': 190,
    '/': 191,
    'Y': 89,
    'LEFT': 37,
    'RIGHT': 39,
    'I': 73,
    'O': 79,
    'S': 83,
    'BACKSPACE': 8
  }
  
  var keyboardHelpVisible = false;
  var customKeys = objectValue('settings.keys', jsbin) || {};
  var panelShortcuts = { start: KEYCODE['0'] }; // 49 (first panel...)

  $('input.enablealt').attr('checked', customKeys.useAlt ? true : false).change(enableAltUse);

  $.browser.platform = identifyBrowser()

  if (!customKeys.disabled) {
    $body.keydown(keycontrol);
  } else {
    $body.addClass('nokeyboardshortcuts');
  }

  if (!customKeys.disabled) {
    $document.keydown(setShortcuts)
  }
  
  function setShortcuts(event){
    var isMetaShortcut = function (key) {
      return event.metaKey && event.which === KEYCODE[key]
    }

    var archive = function () {
      archive(!event.shiftKey);
      return event.preventDefault();
    }

    var focusLeftPanel = function () {
      Panels.left_panel().focus();
    }

    var focusRightPanel = function () {
      Panels.right_panel().focus();
    }

    var addDescription = function () {
      Navigation.add_description();
    }

    var open = function() {
      var visible_panels = Panels.visible_panels_name();
      
      if(visible_panels.length > 0){
        $.cookie('list-panels', visible_panels.join(','));
        $('a.homebtn').trigger('click', 'keyboard');
      }else{
        $.each($.cookie('list-panels').split(","), function(i, data){
          jsbin.panels.panels[data].toggle();
        });
      }
      event.preventDefault();
    }
    
    var zoom_out = function () {
      var current_panel = jsbin.panels.focused;
      
      $.each($.cookie('zoom-panels').split(","), function(i, data){
        jsbin.panels.panels[data].show();
        current_panel.hide();
      });
    }

    var zoom_in = function () {
      var panels = Panels.visible_panels_name();
      var current_panel = jsbin.panels.focused;
      
      $.cookie('zoom-panels', panels.join(','));

      var target_panels = _.reject(panels, function(panel){
        return panel === "live"
      });

      $.each(target_panels, function(i, data){
        jsbin.panels.panels[data].hide();
      });

      jsbin.panels.panels.live.show();
      current_panel.hide();
    }
    
    var includeAltKey = customKeys.useAlt ? event.altKey : !event.altKey;
    var closekey = customKeys.closePanel ? customKeys.closePanel : KEYCODE['9'];
    var zoomkey = customKeys.zoomPanel ? customKeys.zoomPanel : KEYCODE['0'];

    if (event.ctrlKey && $.browser.platform !== 'mac') { event.metaKey = true; }

    if (isMetaShortcut('Y')) { archive(); }
    if (isMetaShortcut('LEFT')) { focusLeftPanel(); }
    if (isMetaShortcut('RIGHT')) { focusRightPanel(); }
    if (isMetaShortcut('I')) { addDescription(); }
    
    if (isMetaShortcut(['O'])) { // open
      open();
    } else if (event.metaKey && event.shiftKey && event.which === KEYCODE['BACKSPACE']) { // cmd+shift+backspace
      $('a.deletebin:first').trigger('click', 'keyboard');
      event.preventDefault();
    } else if (!jsbin.embed && event.metaKey && event.which === KEYCODE['S']) { // save
      if (event.shiftKey === false) {
        // if (saveChecksum) {
        //   saveChecksum = false;
        // } else {
        //   // trigger an initial save
        //   $('a.save:first').click();
        // }

        $('a.save:first').click();
        event.preventDefault();
      } else if (event.shiftKey === true) { // shift+s = open share menu
        var $sharemenu = $('#sharemenu');
        if ($sharemenu.hasClass('open')) {

        }
        $('#sharemenu a').trigger('mousedown');
        event.preventDefault();
      }
    } else if (event.which === closekey &&
               event.metaKey &&
               includeAltKey &&
               jsbin.panels.focused) {

      // Close key (^9)
      jsbin.panels.hide(jsbin.panels.focused.id);
      event.preventDefault();
      
    } else if (event.which === zoomkey &&
               event.metaKey &&
               includeAltKey &&
               jsbin.panels.focused) {

      if(panels.length === 2){
        zoom_out();
      }else{
        zoom_in();
      }

      current_panel.show();
      event.preventDefault();
      
    } else if (event.which === 220 && (event.metaKey || event.ctrlKey)) {
      jsbin.settings.hideheader = !jsbin.settings.hideheader;
      $body[jsbin.settings.hideheader ? 'addClass' : 'removeClass']('hideheader');
    } else if (event.which === 76 && event.ctrlKey && jsbin.panels.panels.console.visible) {
      if (event.shiftKey) {
        // reset
        jsconsole.reset();
      } else {
        // clear
        jsconsole.clear();
      }
    }
  }
  
  function keycontrol(event) {
    event = normalise(event);

    var panel = {};

    if (jsbin.panels.focused && jsbin.panels.focused.editor) {
      panel = jsbin.panels.focused.editor;
    } else if (jsbin.panels.focused) {
      panel = jsbin.panels.focused;
    }

    var codePanel = { css: 1, javascript: 1, html: 1, jasmine: 1, dataframe: 1}[panel.id],
        hasRun = false;

    var includeAltKey = customKeys.useAlt ? event.altKey : !event.altKey;

    // these should fire when the key goes down
    if (event.type === 'keydown') {
      if (codePanel) {
        if (event.metaKey && event.which === 13) {
          // renderTest
          if( editors.livetest.visible ){
            renderLiveTestPreview();
          }
          
          if (editors.console.visible && !editors.live.visible) {
            hasRun = true;
            // editors.console.render();
            $('#runconsole').trigger('click', 'keyboard');
          } else if (editors.live.visible) {
            // editors.live.render(true);
            $('#runwithalerts').trigger('click', 'keyboard');
            hasRun = true;
          } else {
            $('#runwithalerts').trigger('click', 'keyboard');
            hasRun = true;
          }

          if (hasRun) {
            event.stop();
          } else {
            // if we have write access - do a save - this will make this bin our latest for use with
            // /<user>/last/ - useful for phonegap inject
            sendReload();
          }
        }
      }

      // shortcut for showing a panel
      if (panelShortcuts[event.which] !== undefined && event.metaKey && includeAltKey) {
        if (jsbin.panels.focused.id === panelShortcuts[event.which]) {
          // this has been disabled in favour of:
          // if the panel is visible, and the user tries cmd+n - then the browser
          // gets the key command.
          jsbin.panels.hide(panelShortcuts[event.which]);
          event.stop();
        } else {
          // show
          jsbin.panels.show(panelShortcuts[event.which]);
          event.stop();

          if (!customKeys.useAlt && (!jsbin.settings.keys || !jsbin.settings.keys.seenWarning)) {
            var cmd = $.browser.platform === 'mac' ? 'cmd' : 'ctrl';
            if (!jsbin.settings.keys) {
              jsbin.settings.keys = {};
            }
            jsbin.settings.keys.seenWarning = true;
            $document.trigger('tip', {
              type: 'notification',
              content: '<label><input type="checkbox" class="enablealt"> <strong>Turn this off</strong>. Reserve ' + cmd + '+[n] for switching browser tabs and use ' + cmd + '+<u>alt</u>+[n] to switch JS Bin panels. You can access this any time in <strong>Help&rarr;Keyboard</strong></label>'
            });
            $('#tip').delegate('input.enablealt', 'click', function () {
              enableAltUse.call(this);
              window.location.reload();
            });
          }
        }
      }

      if (event.which === KEYCODE['/'] && event.metaKey && event.shiftKey) {
        // show help
        opendropdown($('#help').prev()[0]);
        event.stop();
      } else if (event.which === KEYCODE['ESC'] && keyboardHelpVisible) {
        $body.removeClass('keyboardHelp');
        keyboardHelpVisible = false;
        event.stop();
      } else if (event.which === KEYCODE['ESC'] && jsbin.panels.focused && codePanel) {
        // event.stop();
        // return CodeMirror.commands.autocomplete(jsbin.panels.focused.editor);
      } else if (event.which === KEYCODE['.'] && includeAltKey && event.metaKey && panel.id === 'html') {
        // auto close the element
        if (panel.somethingSelected()) {return;}
        // Find the token at the cursor
        var cur = panel.getCursor(false), token = panel.getTokenAt(cur), tprop = token;
        // If it's not a 'word-style' token, ignore the token.
        if (!/^[\w$_]*$/.test(token.string)) {
          token = tprop = {start: cur.ch, end: cur.ch, string: '', state: token.state,
                           className: token.string === '.' ? 'js-property' : null};
        }

        panel.replaceRange('</' + token.state.htmlState.context.tagName + '>', {line: cur.line, ch: token.end}, {line: cur.line, ch: token.end});
        event.stop();
      } else if (event.which === 188 && event.ctrlKey && event.shiftKey && codePanel) {
        // start a new tag
        event.stop();
        return Autocomplete.startTagComplete(panel);
      }
    }
    // return true;

    if (event.stopping) {
      return false;
    }
  }

  function identifyBrowser(){
    var ua = navigator.userAgent;
    if (ua.indexOf(' Mac ') !== -1) {
      return 'mac';
    } else if (/windows|win32/.test(ua)) {
      return 'win';
    } else if (/linux/.test(ua)) {
      return 'linux';
    } else {
      return '';
    }
  }

  function enableAltUse() {
    if (!jsbin.settings.keys) {
      jsbin.settings.keys = {};
    }
    jsbin.settings.keys.useAlt = this.checked;
  }

  function normalise(event) {
    var myEvent = {
      type: event.type,
      which: event.which,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      ctrlKey: event.ctrlKey,
      altKey: event.altKey,
      orig: event
    };

    if ( event.which === null && (event.charCode !== null || event.keyCode !== null) ) {
      myEvent.which = event.charCode !== null ? event.charCode : event.keyCode;
    }

    // Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
    if ( !event.metaKey && event.ctrlKey ) {
      myEvent.metaKey = event.ctrlKey;
    }

    // this is retarded - I'm having to mess with the event just to get Firefox
    // to send through the right value. i.e. when you include a shift key modifier
    // in Firefox, if it's punctuation - event.which is zero :(
    // Note that I'm only doing this for the ? symbol + ctrl + shift
    if (event.which === 0 && event.ctrlKey === true && event.shiftKey === true && event.type === 'keydown') {
      myEvent.which = 191;
    }

    var oldStop = event.stop;
    myEvent.stop = function () {
      myEvent.stopping = true;
      if (oldStop) {oldStop.call(event);}
    };

    return myEvent;
  }

  return {
    customKeys: customKeys,
    panelShortcuts: panelShortcuts
  }
})();

var customKeys = Keycontrol.customKeys;
var panelShortcuts = Keycontrol.panelShortcuts;
