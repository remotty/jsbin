var PanelFactory = (function(renderLivePreview, Panels, Panel){
  var createDataframe = function () {
    return new Panel('dataframe', 'javascript', { editor: true, label: 'Data' });
  };

  var createHtml = function () {
    var init = function () {
      // set cursor position on first blank line
      // 1. read all the inital lines
      var lines = this.editor.getValue().split('\n'),
          blank = -1;
      lines.forEach(function (line, i) {
        if (blank === -1 && line.trim().length === 0) {
          blank = i;
          //exit
        }
      });

      if (blank !== -1) {
        this.editor.setCursor({ line: blank, ch: 2 });
        if (lines[blank].length === 0) {
          this.editor.indentLine(blank, 'add');
        }
      }
    };

    return new Panel('html', 'html', { editor: true, label: 'HTML', init: init });
  };

  var createCss = function () {
    return new Panel('css', 'css', { editor: true, label: 'CSS' });
  };

  var createJavascript = function () {
    return new Panel('javascript', 'javascript', { editor: true, label: 'JavaScript' });
  };

  var createJasmine = function () {
    return new Panel('jasmine', 'javascript', { editor: true, label: 'Jasmine' });
  };

  var createConsole = function () {
    // hide and show callbacks registered in console.js
    return new Panel('console', 'console', { label: 'Console' });
  };

  var createLive = function () {
    function show() {
      if (Panels.ready) {
        renderLivePreview();
      }
    }

    function hide() {
      // detroy the iframe if we hide the panel
      // note: $live is defined in live.js
      // Commented out so that the live iframe is never destroyed
      if (Panels.panels.console.visible === false) {
        // $live.find('iframe').remove();
      }
    }

    return new Panel('live', 'live', { label: 'Output', show: show, hide: hide });
  };

  var createLivetest = function () {
    function show() {
      if (Panels.ready) {
        renderLivePreview();
      }
    }

    function hide() {
      // detroy the iframe if we hide the panel
      // note: $live is defined in live.js
      // Commented out so that the live iframe is never destroyed
      if (Panels.panels.console.visible === false) {
        // $live.find('iframe').remove();
      }
    }

    return new Panel('livetest', 'live', { label: 'OutputTest', show: show, hide: hide });
  }

  return {
    createDataframe: createDataframe,
    createHtml: createHtml,
    createCss: createCss,
    createJavascript: createJavascript,
    createJasmine: createJasmine,
    createConsole: createConsole,
    createLive: createLive,
    createLivetest: createLivetest
  }
})(renderLivePreview, Panels, Panel);
