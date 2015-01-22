/*global $, jsbin, vex, setTimeout */

var analytics = require('../chrome/analytics');
// var Panels.panels = require('../Panels.panels/Panels.panels');
var Panels = require('../editors/panels');
var helper = require('../helper/global_helper');
var saveChecksum = require('../helper/global_helper').saveChecksum;
var store = require('../chrome/storage');
var ESC = require('../chrome/esc');
var Archive = require('../chrome/archive');
var renderLivePreview = require('../render/render_live_preview').renderLivePreview;
var libraries = require('../editors/libraries');
var Library = require('../editors/library');
var jsconsole = require('../render/console');
var updateSavedState = require('../chrome/save').updateSavedState;
var split = require('../chrome/save').split;
var localStorage = require('../chrome/storage').localStorage;

module.exports = (function(){
  'use strict';
  
  var $enableUniversalEditor = $('#enableUniversalEditor');
  var $startingpoint = $('a.startingpoint');
  var $privateButton = $('#control a.visibilityToggle#private');
  var $publicButton = $('#control a.visibilityToggle#public');
  var $visibilityButtons = $('#control a.visibilityToggle');
  var $dropdownLinks = $('.dropdownmenu a, .dropdownmenu .button');
  var $dropdownButtons = $('.button-dropdown, .button-open');
  var $lockrevision = $('div.lockrevision');
  var dropdownOpen = false;
  var onhover = false;
  var menuDown = false;

  var setup_startingpoint_event = function(){
    $startingpoint.click(function (event) {
      event.preventDefault();
      if (localStorage) {
        analytics.saveTemplate();
        localStorage.setItem('saved-javascript', Panels.panels.javascript.getCode());
        localStorage.setItem('saved-html', Panels.panels.html.getCode());
        localStorage.setItem('saved-css', Panels.panels.css.getCode());

        localStorage.setItem('saved-processors', JSON.stringify({
          javascript: jsbin.panels.panels.javascript.processor.id,
          html: jsbin.panels.panels.html.processor.id,
          css: jsbin.panels.panels.css.processor.id,
        }));

        helper.$document.trigger('tip', {
          type: 'notification',
          content: 'Starting template updated and saved',
          autohide: 3000
        });
      } else {
        helper.$document.trigger('tip', {
          type: 'error',
          content: 'Saving templates isn\'t supported in this browser I\'m afraid. Sorry'
        });
      }
      return false;
    });
  };
    
  // if (localStorage && localStorage['saved-html']) {
  // $startingpoint.append('')
  // }

  var setup_disabled_event = function(){
    $('a.disabled').on('click mousedown mouseup', function (event) {
      event.stopImmediatePropagation();
      return false;
    });
  };

  var setup_loginbtn_event = function(){
    $('#loginbtn').click(function () {
      analytics.login();
      $(this).toggleClass('open');
      // $('#login').show();
      // loginVisible = true;
      // return false;
    });
  };
    
  var setup_logout_event = function(){
    $('a.logout').click(function (event) {
      event.preventDefault();

      // We submit a form here because I can't work out how to style the button
      // element in the form to look the same as the anchor. Ideally we would
      // remove that and just let the form submit itself...
      $(this.hash).submit();
      // Clear session storage so private bins wont be cached.
      for (i = 0; i < store.sessionStorage.length; i++) {
        key = store.sessionStorage.key(i);
        if (key.indexOf('jsbin.content.') === 0) {
          store.sessionStorage.removeItem(key);
        }
      }
    });
  };

  var setup_homebtn_event = function(){
    $('.homebtn').click(function (event, data) {
      if (this.id === 'avatar') {
        analytics.openFromAvatar();
      } else if (this.id === 'profile') {
        analytics.openFromAvatar();
        $(this).closest('.open').removeClass('open');
      } else {
        analytics.open(data);
      }

      jsbin.panels.hideAll();
      return false;
    });
  };

  var setup_lockrevision_event = function(){
    $lockrevision.on('click', function (event) {
      event.preventDefault();
      saveChecksum = false;
      helper.$document.trigger('locked');
    }).on('mouseup', function () {
      return false;
    });
  };

  var setup_document_event = function(){
    helper.$document.on('locked', function () {
      if (!$lockrevision.data('locked')) {
        analytics.lock();
        $lockrevision.removeClass('icon-unlocked').addClass('icon-lock');
        $lockrevision.html('<span>This bin is now locked from further changes</span>');
        $lockrevision.data('locked', true);
      }
    });

    // var $lockrevision = $('.lockrevision').on('click', function (event) {
    // });

    helper.$document.on('saved', function () {
      $lockrevision.removeClass('icon-lock').addClass('icon-unlocked').data('locked', false);
      $lockrevision.html('<span>Click to lock and prevent further changes</span>');
    });
  };

  // TODO decide whether to remove this, since it definitely doesn't work!
  // $('#share input[type=text], #share textarea').on('beforecopy', function (event) {
  //   console.log(this, this.getAttribute('data-path'));
  //   analytics.share('copy', this.getAttribute('data-path').substring(1) || 'output');
  // });

  // TODO
  var setup_sharepanels_event = function(){
    if (!split) {
      var $panelCheckboxes = $('#sharepanels input[type="checkbox"]').on('change', function () {
        updateSavedState();
      });
      $('#sharemenu').bind('open', function () {
        $panelCheckboxes.attr('checked', false);
        jsbin.panels.getVisible().forEach(function (panel) {
          $panelCheckboxes.filter('[data-panel="' + panel.id + '"]').attr('checked', true).change();
        });

      });

    }
  };

  function opendropdown(el) {
    var menu;
    if (!dropdownOpen) {
      menu = $(el).closest('.menu').addClass('open').trigger('open');
      // $body.addClass('menuinfo');
      analytics.openMenu(el.hash.substring(1));
      var input = menu.find(':text:visible:first').focus()[0];
      if (input) {
        setTimeout(function () {
          input.select();
        }, 0);
      }
      dropdownOpen = el;
    }
  }

  function closedropdown() {
    menuDown = false;
    if (dropdownOpen) {
      $dropdownButtons.closest('.menu').removeClass('open').trigger('close');
      // $body.removeClass('menuinfo');
      dropdownOpen = false;
      onhover = false;
      var f = jsbin.panels.focused;
      if (f) {
        f.focus();
        if (f.editor) {
          f.editor.focus();
        }
      }
    }
  }

  var setup_dropdown_buttons_event = function(){
    $dropdownButtons.mousedown(function (e) {
      $dropdownLinks.removeClass('hover');
      if (dropdownOpen && dropdownOpen !== this) {
        closedropdown();
      }
      if (!dropdownOpen) {
        menuDown = true;
        opendropdown(this);
      }
      e.preventDefault();
      return false;
    }).mouseup(function () {
      if (menuDown) { return false; }
    }).click(function () {
      if (!menuDown) {
        analytics.closeMenu(this.hash.substring(1));
        closedropdown();
      }
      menuDown = false;
      return false;
    });
  };

  var setup_actionmenu_event = function(){
    $('#actionmenu').click(function () {
      dropdownOpen = true;
    });
  };

  var setup_body_event = function(){
    var ignoreUp = false;
    helper.$body.bind('mousedown', function (event) {
      if (dropdownOpen) {
        if ($(event.target).closest('.menu').length) {
          ignoreUp = true;
        }
      }
    }).bind('click mouseup', function (event) {
      if (dropdownOpen && !ignoreUp) {
        if (!$(event.target).closest('.menu').length) {
          closedropdown();
          return false;
        }
      }
      ignoreUp = false;
    });
  };

  var setup_dropdown_links_event = function(){
    var fromClick = false;
    $dropdownLinks.mouseup(function (e) {
      if (e.target.nodeName === 'INPUT') {
        return;
      }

      setTimeout(closedropdown, 0);
      analytics.selectMenu(this.getAttribute('data-label') || this.hash.substring(1) || this.href);
      if (!fromClick) {
        if (this.hostname === window.location.hostname) {
          if ($(this).triggerHandler('click') !== false) {
            window.location = this.href;
          }
        } else {
          if (this.getAttribute('target')) {
            window.open(this.href);
          } else {
            window.location = this.href;
          }
        }
      }
      fromClick = false;
    }).mouseover(function () {
      $dropdownLinks.removeClass('hover');
      $(this).addClass('hover');
    }).mousedown(function (e) {
      if (e.target.nodeName === 'INPUT') {
        return;
      }
      fromClick = true;
    });
  };

  var setup_jsbinurl_event = function(){
    $('#jsbinurl').click(function (e) {
      setTimeout(function () {
        jsbin.panels.panels.live.hide();
      }, 0);
    });
  };

  var setup_runwithalerts_event = function(){
    $('#runwithalerts').click(function (event, data) {
      analytics.run(data);
      if (Panels.panels.console.visible) {
        Panels.panels.console.render(true);
      } else {
        renderLivePreview(true);
      }
      return false;
    });
  };

  var setup_runconsole_event = function(){
    $('#runconsole').click(function () {
      analytics.runconsole();
      Panels.panels.console.render(true);
      return false;
    });
  };

  var setup_clearconsole_event = function(){
    $('#clearconsole').click(function () {
      jsconsole.clear();
      return false;
    });
  };

  var setup_showhelp_event = function(){
    $('#showhelp').click(function () {
      helper.$body.toggleClass('keyboardHelp');
      ESC.keyboardHelpVisible = helper.$body.is('.keyboardHelp');
      if (ESC.keyboardHelpVisible) {
        // analytics.help('keyboard');
      }
      return false;
    });
  };

  var setup_showurls_event = function(){
    $('#showurls').click(function () {
      helper.$body.toggleClass('urlHelp');
      ESC.urlHelpVisible = helper.$body.is('.urlHelp');
      if (ESC.urlHelpVisible) {
        // analytics.urls();
      }
      return false;
    });
  };

  var setup_code_dblclick_event = function(){
    $('.code.panel > .label > span.name').dblclick(function () {
      jsbin.panels.allEditors(function (panel) {
        var lineNumbers = !panel.editor.getOption('lineNumbers');
        panel.editor.setOption('lineNumbers', lineNumbers);
        jsbin.settings.editor.lineNumbers = lineNumbers;
      });
    });
  };

  var setup_createnew_event = function(){
    $('a#createnew').click(function (event) {

      vex.dialog.prompt({
        message: 'What is name of new bin?',
        placeholder: 'Name of bin',
        className: 'vex-theme-os',
        callback: function(value) {
          $.cookie('new-bin-name', value);

          if($.cookie('new-bin-name') !== undefined){
            setTimeout(function () {
              window.location = jsbin.root;
            }, 1000);
          }
        }
      });
      
    });

    // $('#createnew').click(function (event) {
    //   var i, key;
    //   analytics.createNew();
    //   // FIXME this is out and out [cr]lazy....
    //   jsbin.panels.savecontent = function(){};
    //   for (i = 0; i < store.sessionStorage.length; i++) {
    //     key = store.sessionStorage.key(i);
    //     if (key.indexOf('jsbin.content.') === 0) {
    //       store.sessionStorage.removeItem(key);
    //     }
    //   }

    //   // clear out the write checksum too
    //   store.sessionStorage.removeItem('checksum');

    //   jsbin.panels.saveOnExit = false;

    //   // first try to restore their default panels
    //   jsbin.panels.restore();

    //   // if nothing was shown, show html & live
    //   setTimeout(function () {
    //     if (jsbin.panels.getVisible().length === 0) {
    //       jsbin.panels.panels.html.show();
    //       jsbin.panels.panels.live.show();
    //     }
    //     window.location = jsbin.root;
    //   }, 0);
    // });
  };

  var setup_visibility_button_event = function(){
    $visibilityButtons.click(function(event) {
      event.preventDefault();

      var visibility = $(this).data('vis');
      var infocard = $('#infocard');

      $.ajax({
        url: jsbin.getURL({ withRevision: true }) + '/' + visibility,
        type: 'post',
        success: function (data) {

          $document.trigger('tip', {
            type: 'notification',
            content: 'This bin is now ' + visibility,
            autohide: 6000
          });

          $visibilityButtons.css('display', 'none');

          if (visibility === 'public') {
            $privateButton.css('display', 'block');

            infocard.addClass('public');
            infocard.removeClass('private');
            infocard.find('.visibility').text('public');
          } else {
            $publicButton.css('display', 'block');

            infocard.addClass('private');
            infocard.removeClass('public');
            infocard.find('.visibility').text('private');
          }

        }
      });
    });
  };

  var setup_login_event = function(){
    $('form.login').closest('.menu').bind('close', function () {
      $(this).find('.loginFeedback').empty().hide();
      $('#login').removeClass('forgot');
    });
  };

  var setup_lostpass_event = function(){
    $('#lostpass').click(function (e) {
      $('#login').addClass('forgot').find('input[name=email]').focus();
      return false;
    });
  };

  var warning_enablejs_uncheck = function(){
    jsbin.settings.includejs = jsbin.settings.includejs === undefined ? true : jsbin.settings.includejs;
    
    // ignore for embed as there might be a lot of embeds on the page
    if (!jsbin.embed && store.sessionStorage.getItem('runnerPending')) {
      helper.$document.trigger('tip', {
        content: 'It looks like your last session may have crashed, so I\'ve disabled "Auto-run JS" for you',
        type: 'error'
      });
      jsbin.settings.includejs = false;
    }
  };

  var setup_enablejs_event = function(){
    jsbin.settings.includejs = jsbin.settings.includejs === undefined ? true : jsbin.settings.includejs;
    
    $('#enablejs').change(function () {
      jsbin.settings.includejs = this.checked;
      analytics.enableLiveJS(jsbin.settings.includejs);
      Panels.panels.live.render();
    }).attr('checked', jsbin.settings.includejs);
  };

  var hideheader = function(){
    if (!jsbin.embed && jsbin.settings.hideheader) {
      helper.$body.addClass('hideheader');
    }
  };
  
  var setup_cancel_up = function(){
    var cancelUp = false;
    $('form input, form textarea').focus(function () {
      this.select();
      cancelUp = true;
    }).mouseup(function () {
      if (cancelUp) {
        cancelUp = false;
        return false;
      }
    });
  };

  var move_hash = function(){
    if (window.location.hash) {
      $('a[href$="' + window.location.hash + '"]').mousedown();
    }
  };

  var setup_add_shortcut_events = function(){
    var ismac = navigator.userAgent.indexOf(' Mac ') !== -1,
        mackeys = {
          'ctrl': '⌘',
          'shift': '⇧',
          'del': '⌫'
        };

    $('#control').find('a[data-shortcut]').each(function () {
      var $this = $(this),
          data = $this.data();

      var key = data.shortcut;
      if (ismac) {
        key = key.replace(/ctrl/i, mackeys.ctrl).replace(/shift/, mackeys.shift).replace(/del/, mackeys.del).replace(/\+/g, '').toUpperCase();
      }

      $this.append('<span class="keyshortcut">' + key + '</span>');
    });
  };

  var add_description = function(){
    var re = {
      head: /<head(.*)\n/i,
      meta: /<meta name="description".*?>/i,
      metaContent: /content=".*?"/i
    };
    
    // if not - insert
    // <meta name="description" content="" />
    // if meta description is in the HTML, highlight it
    var editor = jsbin.panels.panels.html,
        cm = editor.editor,
        html = editor.getCode();

    if (!editor.visible) {
      editor.show();
    }

    if (!re.meta.test(html)) {
      if (re.head.test(html)) {
        html = html.replace(re.head, '<head$1\n' + metatag);
      } else {
        // slap in the top
        html = metatag + html;
      }
    }

    editor.setCode(html);

    // now select the text
    // editor.editor is the CM object...yeah, sorry about that...
    var cursor = cm.getSearchCursor(re.meta);
    cursor.findNext();

    var contentCursor = cm.getSearchCursor(re.metaContent);
    contentCursor.findNext();

    var from = { line: cursor.pos.from.line, ch: cursor.pos.from.ch + '<meta name="description" content="'.length },
        to = { line: contentCursor.pos.to.line, ch: contentCursor.pos.to.ch - 1 };

    cm.setCursor(from);
    cm.setSelection(from, to);
    cm.on('cursoractivity', function () {
      cm.on('cursoractivity', null);
      mark.clear();
    });

    var mark = cm.markText(from, to, { className: 'highlight' });

    cm.focus();

    return false;
  };

  var setup_add_meta_event = function(){
    $('#addmeta').click(function () {
      add_description();
    });
  };

  var setup_publish_to_vanity_event = function(){
    $('a.publish-to-vanity').on('click', function (event) {
      event.preventDefault();
      analytics.publishVanity();

      $.ajax({
        type: 'post',
        url: this.href,
        data: { url: jsbin.getURL({ withRevision: true }) },
        success: function () {
          $document.trigger('tip', {
            type: 'notification',
            content: 'This bin is now published to your vanity URL: <a target="_blank" href="' + jsbin.shareRoot + '">' + jsbin.shareRoot + '</a>'
          });
        },
        error: function (xhr) {
          $document.trigger('tip', {
            type: 'error',
            content: 'There was a problem publishing to your vanity URL. Can you try again or file a <a target="_blank" href="' + githubIssue() + '">new issue</a>?'
          });
        }
      });
    });
  };
  
  var setup_delete_all_bin_event = function(){
    $('a.deleteallbins').on('click', function (e) {
      e.preventDefault();
      if (confirm('Delete all snapshots of this bin including this one?')) {
        $.ajax({
          type: 'post',
          url: jsbin.getURL({ withRevision: true }) + '/delete-all',
          data: { checksum: jsbin.state.checksum },
          success: function () {
            jsbin.state.deleted = true;
            $document.trigger('tip', {
              type: 'error',
              content: 'This bin and history is now deleted. You can continue to edit, but once you leave the bin can\'t be retrieved'
            });
          },
          error: function (xhr) {
            if (xhr.status === 403) {
              $document.trigger('tip', {
                content: 'You don\'t own this bin, so you can\'t delete it.',
                autohide: 5000
              });
            }
          }
        });
      } else {
        $document.trigger('tip', {
          type: 'error',
          content: 'You must be logged in <em><strong>the bin owner</strong></em> to delete all snapshots. <a target="_blank" href="/help/delete-a-bin">Need help?</a>'
        });
      }
    });
  };

  var setup_delete_bin_event = function(){
    $('a.deletebin').on('click', function (e) {
      e.preventDefault();
      if (confirm('Delete this bin?')) {
        $.ajax({
          type: 'post',
          url: jsbin.getURL({ withRevision: true }) + '/delete',
          data: { checksum: jsbin.state.checksum },
          success: function () {
            jsbin.state.deleted = true;
            $document.trigger('tip', {
              type: 'error',
              content: 'This bin is now deleted. You can continue to edit, but once you leave the bin can\'t be retrieved'
            });
          },
          error: function (xhr) {
            if (xhr.status === 403) {
              $document.trigger('tip', {
                content: 'You don\'t own this bin, so you can\'t delete it.',
                autohide: 5000
              });
            }
          }
        });
      }
    });
  };

  var setup_rename_bin_event = function(){
    $('a.renamebin').on('click', function (e) {
      e.preventDefault();

      vex.dialog.prompt({
        message: 'What is new name of this bin?',
        placeholder: 'Name of bin',
        className: 'vex-theme-os',
        callback: function(value) {

          $.ajax({
            type: 'post',
            url: jsbin.getURL({ withRevision: true }) + '/rename',
            data: {
              checksum: jsbin.state.checksum,
              new_name: value
            },
            success: function () {
              setTimeout(function () {
                var url = (jsbin.getURL({ withRevision: true }) + "/edit").replace(jsbin.state.code, value);
                
                window.location = url;
              }, 1000);          
            },
            error: function (xhr) {
              if (xhr.status === 403) {
                $document.trigger('tip', {
                  content: 'Rename is failed',
                  autohide: 5000
                });
              }
            }
          });
          
        }
      });  
    });
  };

  var setup_archive_bin_event = function(){
    $('a.archivebin').on('click', function (e) {
      e.preventDefault();
      Archive.archive();
    });

    $('a.unarchivebin').on('click', function (e) {
      e.preventDefault();
      Archive.archive(false);
    });
  };

  var setup_universal_editor_event = function(){
    $enableUniversalEditor.on('change', function (e) {
      e.preventDefault();

      jsbin.settings.editor.simple = this.checked;
      analytics.universalEditor(jsbin.settings.editor.simple);
      window.location.reload();
    });

    // setup
    if (jsbin.settings.editor.simple) {
      $enableUniversalEditor.prop('checked', true);
    }
  };

  var setup_skipToEditor_event = function(){
    $('#skipToEditor').click(function () {
      if (jsbin.settings.editor.simple) {
        $('#html').focus();
      } else {
        jsbin.panels.panels.html.editor.focus();
      }
    });
  };
  
  var setup_autocomplte_library_event = function(){
    // deault libraries
    var libraries_bloodhound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 15,
      local: $.map(libraries, function(library) {
        return {
          value: library.label,
          url: library.url,
          snippet: library.snippet
        };
      })
    });

    libraries_bloodhound.initialize();
    
    $('#libraries').val("").typeahead({
      hint: false,
      highlight: true,
      minLength: 1
    },{
      name: 'Libraries',
      displayKey: 'value',
      source: libraries_bloodhound.ttAdapter()
    }).on('typeahead:selected', function (obj, library) {
      $(obj.target).val("");
      Library.insertResources(library.url);
      if (library.snippet) {
        Library.insertSnippet(library.snippet);
      }
      closedropdown();
    }); 

    // cdnjs libraries
    var cdnjs_bloodhound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 15,
      remote: {
        url: 'http://api.cdnjs.com/libraries?search=%QUERY&fields=assets',
        filter: function (data) {
          return $.map(data.results, function(library){
            return {
              value: library.name,
              url: library.latest
            };
          });
        }
      }
    });

    cdnjs_bloodhound.initialize();

    $('#cdnjs').val("").typeahead({
      hint: false,
      highlight: true,
      minLength: 1
    },{
      name: 'cdnjs',
      displayKey: 'value',
      source: cdnjs_bloodhound.ttAdapter()
    }).on('typeahead:selected', function (obj, library) {
      $(obj.target).val("");
      Library.insertResources(library.url);
      closedropdown();
    }); 
  };

  var setup_jasmine_snippet_button_event = function(){
    // Input Jasmine Button
    $('#input-jasmine').bind('click', function(e){
      var cdnjs_url = 'https://cdnjs.cloudflare.com/ajax/libs';
      var javascripts = [
        cdnjs_url + '/jasmine/2.0.0/boot.js',
        cdnjs_url + '/jasmine/2.0.0/jasmine-html.js',
        cdnjs_url + '/jasmine/2.0.0/jasmine.js'
      ];

      $.each(javascripts, function(ext, js){
        Library.insertResources(js);
        });
      
      var css_url = cdnjs_url + '/jasmine/2.0.0/jasmine.css';
      var css_tag = '<link href="' + css_url +'" rel="stylesheet">';

      Library.insertSnippet(css_tag);
      closedropdown();
    });
  };

  var setup_download_event = function(){
    $('#download').click(function (event) {
      event.preventDefault();
      window.location = jsbin.getURL({ withRevision: true }) + '/download';
      analytics.download();
    });
  };
  
  var setup = function(){
    setup_startingpoint_event();
    setup_disabled_event();
    setup_loginbtn_event();
    setup_logout_event();
    setup_homebtn_event();
    setup_lockrevision_event();
    setup_document_event();
    setup_sharepanels_event();
    setup_dropdown_buttons_event();
    setup_actionmenu_event();
    setup_body_event();
    setup_dropdown_links_event();
    setup_jsbinurl_event();
    setup_runwithalerts_event();
    setup_runconsole_event();
    setup_clearconsole_event();
    setup_showhelp_event();
    setup_showurls_event();
    setup_code_dblclick_event();
    setup_createnew_event();
    setup_visibility_button_event();
    setup_login_event();
    setup_lostpass_event();
    warning_enablejs_uncheck();
    setup_enablejs_event();
    hideheader();
    setup_cancel_up();
    move_hash();
    setup_add_shortcut_events();
    setup_add_meta_event();
    setup_publish_to_vanity_event();
    setup_delete_all_bin_event();
    setup_delete_bin_event();
    setup_rename_bin_event();
    setup_archive_bin_event();
    setup_universal_editor_event ();
    setup_skipToEditor_event();
    setup_autocomplte_library_event();
    setup_jasmine_snippet_button_event();
    setup_download_event();
  };

  setup();
  
  return {
    add_description: add_description,
    opendropdown: opendropdown,
    closedropdown: closedropdown
  };
})();
