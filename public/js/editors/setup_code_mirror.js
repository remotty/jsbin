/*globals jsbin:true, CodeMirror:true, editorModes:true*/

(function(jsbin, CodeMirror, editorModes){
  'use strict';
  
  if (jsbin.settings.editor.tabMode === 'default') {
    CodeMirror.keyMap.basic.Tab = undefined;
  } else if (jsbin.settings.editor.tabMode !== 'classic') {
    CodeMirror.keyMap.basic.Tab = 'indentMore';
  }

  if (!CodeMirror.commands) {
    CodeMirror.commands = {};
  }

  // Save a reference to this autocomplete function to use it when Tern scripts
  // are loaded but not used, since they will automatically overwrite the
  // CodeMirror autocomplete function with CodeMirror.showHint
  var simpleJsHint = function(cm) {
    if (CodeMirror.snippets(cm) === CodeMirror.Pass) {
      return CodeMirror.simpleHint(cm, CodeMirror.hint.javascript);
    }
  };

  CodeMirror.commands.autocomplete = simpleJsHint;

  CodeMirror.commands.snippets = function (cm) {
    if (['htmlmixed', 'javascript', 'css', editorModes.less, editorModes.sass, editorModes.scss].indexOf(cm.options.mode) === -1) {
      return CodeMirror.simpleHint(cm, CodeMirror.hint.anyword);
    } else {
      return CodeMirror.snippets(cm);
    }
  };
})(jsbin, CodeMirror, editorModes);
