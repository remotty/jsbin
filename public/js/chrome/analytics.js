/*global jsbin, _gaq, module */

(function(window){
  'use strict';
  
  module.exports = {
    track: function (category, action, label, value) {
      var data = ['_trackEvent', category, action];
      if (label) {
        data.push(label);
      }
      if (value) {
        data.push(value);
      }
      
      if (window._gaq) {
        window._gaq.push(data);
      }
    },
    universalEditor: function (value) {
      this.track('menu', 'universalEditor', value);
    },
    library: function (action, value) {
      this.track('menu', action, 'library', value);
    },
    infocard: function (action, value) {
      this.track('infocard', action, value);
    },
    embed: function () {
      this.track('state', 'embed');
      try {
        this.track('state', 'embed', window.top.location);
      } catch (e) {}
    },
    milestone: function () {
      this.track('bin', 'save', window.location.pathname);
    },
    clone: function () {
      this.track('bin', 'clone', window.location.pathname);
    },
    'delete': function () {
      this.track('bin', 'delete', window.location.pathname);
    },
    lock: function () {
      this.track('bin', 'lock', window.location.pathname);
    },
    openShare: function () {
      this.track('menu', 'open', 'share');
    },
    saveTemplate: function () {
      this.track('menu', 'select', 'save-template');
    },
    createNew: function (from) {
      this.track(from || 'menu', 'select', 'new');
    },
    open: function (from) {
      this.track(from || 'menu', 'select', 'open');
    },
    openFromAvatar: function () {
      this.track('menu', 'select', 'open via avatar');
    },
    openMenu: function (label) {
      this.track('menu', 'open', label);
    },
    closeMenu: function (label) {
      this.track('menu', 'close', label);
    },
    selectMenu: function (item) {
      if (item) {
        this.track('menu', 'select', item);
      }
    },
    share: function (action, label) {
      this.track('share', action, label);
    },
    download: function (from) {
      this.track(from || 'menu', 'select', 'download');
    },
    showPanel: function (panelId) {
      this.track('panel', 'show', panelId);
    },
    hidePanel: function (panelId) {
      this.track('panel', 'hide', panelId);
    },
    logout: function () {
      this.track('menu', 'select', 'logout');
    },
    register: function (success) {
      if (success === undefined) {
        this.track('menu', 'open', 'login');
      } else {
        this.track('user', 'register', ok ? 'success' : 'fail');
      }
    },
    login: function (ok) {
      if (ok === undefined) {
        this.track('menu', 'open', 'login');
      } else {
        this.track('user', 'login', ok ? 'success' : 'fail');
      }
    },
    enableLiveJS: function (ok) {
      this.track('button', 'auto-run js', ok ? 'on' : 'off');
    },
    archiveView: function (visible) {
      this.track('button', 'view archive', visible ? 'on' : 'off');
    },
    archive: function (url) {
      this.track('button', 'archive', url);
    },
    unarchive: function (url) {
      this.track('button', 'unarchive', url);
    },
    loadGist: function (id) {
      this.track('state', 'load gist', id);
    },
    layout: function (panelsVisible) {
      var layout = [], panel = '';

      for (panel in panelsVisible) {
        layout.push(panel.id);
      }

      this.track('layout', 'update', layout.sort().join(',') || 'none');
    },
    run: function (from) {
      this.track(from || 'button', 'run with js');
    },
    publishVanity: function () {
      this.track('bin', 'publish-vanity');
    },
    runconsole: function (from) {
      this.track(from || 'button', 'run console');
    },
    welcomePanelState: function (state) {
      var s = 'close';
      if (state) {
        s = 'open';
      }
      this.track('state', 'welcome-panel', s);
    },
    welcomePanelLink: function (url) {
      this.track('welcome-panel-link', url);
    }
  };
})(window);

