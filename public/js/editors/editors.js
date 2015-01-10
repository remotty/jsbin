var Editors = (function($document, renderLivePreview, PanelFactory,
                        Panels, upgradeConsolePanel){
  'use strict';
  
  var editors = Panels.panels;

  var createPanels = function(){
    // show all panels (change the order to control the panel order)
    editors.html = PanelFactory.createHtml();
    editors.css = PanelFactory.createCss();
    editors.javascript = PanelFactory.createJavascript();
    editors.jasmine = PanelFactory.createJasmine();
    editors.dataframe = PanelFactory.createDataframe();

    editors.console = PanelFactory.createConsole();
    upgradeConsolePanel(editors.console);
    editors.live = PanelFactory.createLive();
    editors.livetest = PanelFactory.createLivetest();
  };

  var setup = function(){
    createPanels();
    
    // jsconsole.init(); // sets up render functions etc.
    editors.livetest.settings.render = function (showAlerts) {
      if (Panels.ready) {
        renderLivePreview(showAlerts);
      }
    };

    setTimeout(function () {
      Panels.restore();
    }, 10);
    Panels.focus(Panels.getVisible()[0] || null);

    var editorsReady = setInterval(function () {
      var ready = true,
          resizeTimer = null,
          panel,
          panelId,
          hash = window.location.hash.substring(1);


      for (panelId in Panels.panels) {
        panel = Panels.panels[panelId];
        if (panel.visible && !panel.ready) {
          ready = false;
          break;
        }
      }

      Panels.ready = ready;

      if (ready) {
        Panels.allEditors(function (panel) {
          var key = panel.id.substr(0, 1).toUpperCase() + ':L';
          if (hash.indexOf(key) !== -1) {
            var lines = hash.match(new RegExp(key + '(\\d+(?:-\\d+)?)'));
            if (lines !== null) {
              panel.editor.highlightLines(lines[1]);
            }
          }
        });

        clearInterval(editorsReady);
        // panels.ready = true;
        // if (typeof editors.onReady == 'function') editors.onReady();
        // panels.distribute();

        // if the console is visible, it'll handle rendering of the output and console
        if (Panels.panels.console.visible) {
          editors.console.render();
        } else {
          // otherwise, force a render
          renderLivePreview();
        }


        $(window).resize(function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function () {
            $document.trigger('sizeeditors');
          }, 100);
        });

        $document.trigger('sizeeditors');
        $document.trigger('jsbinReady');
      }
    }, 100);
  };

  return{
    editors: editors,
    setup: setup
  };
})($document, renderLivePreview, PanelFactory, Panels, upgradeConsolePanel);

var editors = Editors.editors;
Editors.setup();
