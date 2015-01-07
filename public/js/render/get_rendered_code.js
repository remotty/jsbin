/*globals $, jsbin, editors, RSVP, loopProtect, documentTitle, CodeMirror, hintingDone*/

var getRenderedCode = function () {
  'use strict';

  var formatErrors = function(res) {
    var errors = [];
    var line = 0;
    var ch = 0;
    for (var i = 0; i < res.length; i++) {
      line = res[i].line || 0;
      ch = res[i].ch || 0;
      errors.push({
        from: CodeMirror.Pos(line, ch),
        to: CodeMirror.Pos(line, ch),
        message: res[i].msg,
        severity : 'error'
      });
    }
    return errors;
  };

  function render(language) {
    return new RSVP.Promise(function (resolve, reject) {
      editors[language].render().then(resolve, function (error) {
        console.warn(editors[language].processor.id + ' processor compilation failed');
        if (!error) {
          error = {};
        }

        if ($.isArray(error)) { // then this is for our hinter
          // console.log(data.errors);
          var cm = jsbin.panels.panels[language].editor;

          // if we have the error reporting function (called updateLinting)
          if (typeof cm.updateLinting !== 'undefined') {
            hintingDone(cm);
            var err = formatErrors(error);
            cm.updateLinting(err);
          } else {
            // otherwise dump to the console
            console.warn(error);
          }
        } else if (error.message) {
          console.warn(error.message, error.stack);
        } else {
          console.warn(error);
        }

        reject(error);
      });
    });
  }

  var promises = {
    html: render('html'),
    javascript: render('javascript'),
    jasmine: render('jasmine'),
    dataframe: render('dataframe'),
    css: render('css')
  };

  return RSVP.hash(promises);
};
