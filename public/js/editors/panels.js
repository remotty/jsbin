var Panels = (function(){
  var panels = function(){
    return _.map(jsbin.panels.panels, function(key, value){
      return {
        name: value,
        display: $('#' + value).parents('.panelwrapper').css('display')
      };
    });
  };

  var visible_panels = function(){
    return _.select(Panels.panels(), function(object){
      return object.display === "block";
    });
  };

  var visible_panels_name = function(){
    return _.map(Panels.visible_panels(), function(object){
      return object.name;
    });
  };

  var current_visible_index = function(){
    return _.findIndex(Panels.visible_panels(), function(object){
      return object.name === jsbin.panels.focused.el.id;
    });
  };

  var left_panel = function(){
    var panels = Panels.visible_panels();
    var index = Panels.current_visible_index() - 1
    
    return jsbin.panels.panels[panels[index].name];
  };

  var right_panel = function(){
    var panels = Panels.visible_panels();
    var index = Panels.current_visible_index() + 1
    
    return jsbin.panels.panels[panels[index].name];
  };

  return {
    panels: panels,
    visible_panels: visible_panels,
    visible_panels_name: visible_panels_name,
    current_visible_index: current_visible_index,
    left_panel: left_panel,
    right_panel: right_panel
  }
})();
