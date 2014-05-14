require.config({
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery"
  }
});

require(['main'], function() {console.log('main.js loaded');});
