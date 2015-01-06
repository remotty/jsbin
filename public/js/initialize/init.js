(function(){
  try {
    console.log('Dave is ready.');
  } catch (e) {
    window.console = {
      log: function () {
        // alert([].slice.call(arguments).join('\n'));
      },
      warn: function () {},
      trace: function () {},
      error: function () {}
    };
  }

  // required because jQuery 1.4.4 lost ability to search my object property :( (i.e. a[host=foo.com])
  jQuery.expr[':'].host = function(obj, index, meta, stack) {
    return obj.host == meta[3];
  };
})();
