/*globals $:true, jQuery:true, store:true, jsbin:true, $window:true
 * , throttle:true, $bin:true, $body:true, $document:true,
 * , Sandbox:true, exposeSettings:true, unload:true */

var JsbinInitializer = (function(){
  'use strict';
  
  function setup(){
    var storedSettings = store.localStorage.getItem('settings');
    if (storedSettings === 'undefined') {
      // yes, equals the *string* "undefined", then something went wrong
      storedSettings = null;
    }
    
    // In all cases localStorage takes precedence over user settings so users can
    // configure it from the console and overwrite the server delivered settings
    jsbin.settings = $.extend({}, jsbin.settings, JSON.parse(storedSettings || '{}'));

    if (jsbin.user) {
      jsbin.settings = $.extend({}, jsbin.user.settings, jsbin.settings);
    }

    // if the above code isn't dodgy, this for hellz bells is:
    jsbin.mobile = /WebKit.*Mobile.*|Android/.test(navigator.userAgent);
    jsbin.tablet = /iPad/i.test(navigator.userAgent); // sue me.
    // IE detect - sadly uglify is compressing the \v1 trick to death :(
    // via @padolsey & @jdalton - https://gist.github.com/527683
    jsbin.ie = (function(){
      var undef,
          v = 3,
          div = document.createElement('div'),
          all = div.getElementsByTagName('i');
      while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
      );
      return v > 4 ? v : undef;
    }());

    if (!storedSettings && (location.origin + location.pathname) === jsbin.root + '/') {
      // first timer - let's welcome them shall we, Dave?
      store.localStorage.setItem('settings', '{}');
    }

    if (!jsbin.settings.editor) {
      // backward compat with jsbin-v2
      jsbin.settings.editor = {};
    }

    if (jsbin.settings.codemirror) {
      $.extend(jsbin.settings.editor, jsbin.settings.codemirror);
    }

    if (jsbin.settings.editor.theme) {
      $(document.documentElement).addClass('cm-s-' + jsbin.settings.editor.theme.split(' ')[0]);
    }

    // Add a pre-filter to all ajax requests to add a CSRF header to prevent
    // malicious form submissions from other domains.
    jQuery.ajaxPrefilter(function (options, original, xhr) {
      var skip = {head: 1, get: 1};
      if (!skip[options.type.toLowerCase()] &&
          !options.url.match(/^https:\/\/api.github.com/)) {
        xhr.setRequestHeader('X-CSRF-Token', jsbin.state.token);
      }
    });

    jsbin.owner = function () {
      return jsbin.user && jsbin.user.name && jsbin.state.metadata && jsbin.state.metadata.name === jsbin.user.name;
    };

    jsbin.getURL = function (options) {
      if (!options) { options = {}; }

      var withoutRoot = options.withoutRoot;
      var url = withoutRoot ? '' : jsbin.root;
      var state = jsbin.state;

      if (state.code) {
        url += '/' + state.code;

        if (!state.latest || options.withRevision) { //} && state.revision !== 1) {
          if (options.withRevision !== false) {
            url += '/' + (state.revision || 1);
          }
        }
      }
      return url;
    };

    jsbin.state.updateSettings = throttle(function updateBinSettingsInner(update, method) {
      if (!method) {
        method = 'POST';
      }

      if (jsbin.state.code) {
        $.ajax({
          type: method, // consistency ftw :-\
          url: jsbin.getURL({ withRevision: true }) + '/settings',
          data: update
        });
      }
    }, 500);

    $window.unload(unload);

    // window.addEventListener('storage', function (e) {
    //   if (e.storageArea === localStorage && e.key === 'settings') {
    //     console.log('updating from storage');
    //     console.log(JSON.parse(store.localStorage.settings));
    //     jsbin.settings = JSON.parse(store.localStorage.settings);
    //   }
    // });

    // hack for Opera because the unload event isn't firing to capture the settings, so we put it on a timer
    if ($.browser.opera) {
      setInterval(unload, 500);
    }

    if (location.search.indexOf('api=') !== -1) {
      (function () {
        var urlParts = location.search.substring(1).split(','),
            newUrlParts = [],
            i = urlParts.length,
            apiurl = '';

        while (i--) {
          if (urlParts[i].indexOf('api=') !== -1) {
            apiurl = urlParts[i].replace(/&?api=/, '');
          } else {
            newUrlParts.push(urlParts[i]);
          }
        }

        $.getScript(jsbin.root + '/js/chrome/sandbox.js', function () {
          var sandbox = new Sandbox(apiurl);
          sandbox.get('settings', function (data) {
            $.extend(jsbin.settings, data);
            unload();
            window.location = location.pathname + (newUrlParts.length ? '?' + newUrlParts.join(',') : '');
          });
        });

      }());
    }

    $document.one('jsbinReady', function () {
      exposeSettings();
      $bin.removeAttr('style');
      $body.addClass('ready');
    });

    if (navigator.userAgent.indexOf(' Mac ') !== -1) (function () {
      var el = $('#keyboardHelp')[0];
      el.innerHTML = el.innerHTML.replace(/ctrl/g, 'cmd').replace(/Ctrl/g, 'ctrl');
    })();

    if (jsbin.embed) {
      $window.on('focus', function () {
        return false;
      });
    }
  }

  return {
    setup: setup
  };
})();

JsbinInitializer.setup();
