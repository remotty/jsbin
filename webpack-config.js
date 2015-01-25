module.exports = {
  entry: {
    'app': [
      './public/js/chrome/hashbang-jump.js',             // Instant*
      './public/js/editors/snippets.cm.js',              // CM Extention*
      './public/js/chrome/storage.js',                   // Library**
      './public/js/initialize/init.js',                  // Instant*
      './public/js/helper/global_helper.js',             // Library**
      './public/js/initialize/jsbin_initializer.js',     // Instant*
      './public/js/editors/mobile_code_mirror.js',       // Instant*
      './public/js/chrome/splitter.js',                  // $ Extention*
      './public/js/chrome/analytics.js',                 // Library**
      './public/js/chrome/settings.js',                  // Library**
      './public/js/chrome/font.js',                      // Instant*
      './public/js/editors/panels.js',                   // Library**
      './public/js/editors/panel.js',                    // Class**
      './public/js/render/get_rendered_code.js',         // function**
      './public/js/render/get_prepared_code_creator.js', // Library*
      './public/js/render/renderer.js',                  // Library*
      './public/js/render/render_live_preview.js',       // Library*
      './public/js/render/live.js',                      // Instant*
      './public/js/editors/keycontrol.js',               // Library-
      './public/js/render/console.js',                   // Library*
      './public/js/processors/processor.js',             // Library*
      './public/js/editors/setup_code_mirror.js',        // Instant *
      './public/js/editors/libraries.js',                // Library*
      './public/js/editors/library.js',                  // Library*
      './public/js/editors/addons.js',                   // Instant
      './public/js/editors/snapshot.js',                 // Instant
      './public/js/editors/beautify.js',                 // InstantBB

      './public/app/views/body.js',
      
      './public/js/render/saved_history_preview.js',     // Library
      './public/js/chrome/share.js',                     // Instant
      './public/js/chrome/esc.js',                       // Library
      './public/js/chrome/issue.js',                     // Instant
      './public/js/chrome/login.js',                     // Instant
      './public/js/chrome/tips.js',                      // Instant
      './public/js/chrome/keys.js',                      // Instant
      './public/js/chrome/save.js',                      // Library
      './public/js/chrome/navigation.js',                // Library

      './public/app/views/infocard.js',
      './public/app/views/topmenu.js',
      
      './public/js/chrome/file_drop.js',                 // Instante
      './public/js/chrome/gist.js',                      // Library
      './public/js/chrome/spinner.js',                   // Library
      './public/js/chrome/infocard.js',                  // Instant
      './public/js/chrome/last_bin.js',                  // Instant
      './public/js/chrome/archive.js',                   // Library
      './public/js/chrome/welcome_panel.js',             // Instant
      './public/js/chrome/help_search.js',               // Instant
      './public/js/chrome/app.js'                        // Instant
    ],
    'runner': [
      './public/js/iframe_runner/utils.js',
      './public/js/iframe_runner/proxy_console.js',
      './public/js/iframe_runner/processor.js',
      './public/js/iframe_runner/sandbox.js',
      './public/js/iframe_runner/runner.js',
      './public/js/iframe_runner/index.js'
    ],
    'tern': [
      './public/js/editors/defs.js',
      './public/js/editors/definitions.js',
      './public/js/editors/tern.js'
    ]
  },
  output: {
    path: __dirname + '/public/js/prod',
    filename: '[name].bundle.js'
  },
  debug: true,
  devtool: "inline-source-map"
};
