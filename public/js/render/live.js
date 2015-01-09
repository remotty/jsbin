(function(){
  var deferredLiveRender = null;

  // timer value: used in the delayed render (because iframes don't have
  // innerHeight/Width) in Chrome & WebKit
  function codeChangeLive(event, data) {
    clearTimeout(deferredLiveRender);

    var editor,
        line,
        panel = jsbin.panels.panels.live;

    var ignoreDuringLive = /^\s*(while|do|for)[\s*|$]/;

    if (jsbin.panels.ready) {
      if (jsbin.settings.includejs === false && data.panelId === 'javascript') {
        // ignore
      } else if (panel.visible) {
        // test to see if they're write a while loop
        if (!jsbin.lameEditor && jsbin.panels.focused && jsbin.panels.focused.id === 'javascript') {
          // check the current line doesn't match a for or a while or a do - which could trip in to an infinite loop
          editor = jsbin.panels.focused.editor;
          line = editor.getLine(editor.getCursor().line);
          if (ignoreDuringLive.test(line) === true) {
            // ignore
            deferredLiveRender = setTimeout(function () {
              codeChangeLive(event, data);
            }, 1000);
          } else {
            renderLivePreview();
          }
        } else {
          renderLivePreview();
        }
      }
    }
  }

  $document.bind('codeChange.live', codeChangeLive);
})();
