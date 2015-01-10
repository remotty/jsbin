var Definitions = (function(){
  'use strict';
  
  var ternDefinitions = [
    {
      name: 'd3',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/d3/d3.min.js',
      match:  /d3.*?\.js"><\/script>/i
    },
    {
      name: 'backbone',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/backbone/backbone.js',
      match:  /backbone.*?\.js"><\/script>/i
    },
    {
      name: 'bacon',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/bacon/dist/Bacon.min.js',
      match: /Bacon.*?\.js"><\/script>/i
    },
    {
      name: 'ember',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/ember/ember.min.js',
      match: /ember.*?\.js"><\/script>/i
    },
    {
      name: 'chartjs',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/chartjs/Chart.min.js',
      match: /Chart.*?\.js"><\/script>/i
    },  
    {
      name: 'functional',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/functional.js/functional.min.js',
      match: /functional.*?\.js"><\/script>/i
    },
    {
      name: 'jasmine',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/jasmine/lib/jasmine-core/jasmine.js',
      match: /jasmine.*?\.js"><\/script>/i
    },
    {
      name: 'lazy',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/lazy.js/lazy.min.js',
      match: /lazy.*?\.js"><\/script>/i
    },
    {
      name: 'lodash',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/lodash/dist/lodash.min.js',
      match: /lodash.*?\.js"><\/script>/i
    },
    {
      name: 'math',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/mathjs/dist/math.min.js',
      match: /math.*?\.js"><\/script>/i
    },
    {
      name: 'moment',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/moment/min/moment.min.js',
      match: /moment.*?\.js"><\/script>/i
    },
    {
      name: 'polymer',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/polymer/polymer.min.js',
      match: /polymer.*?\.js"><\/script>/i
    },
    {
      name: 'raphael',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/raphael/raphael-min.js',
      match: /raphael.*?\.js"><\/script>/i
    },
    {
      name: 'three',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/threejs/build/three.min.js',
      match: /three.*?\.js"><\/script>/i
    },
    {
      name: 'vega',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/vega/vega.min.js',
      match: /vega.*?\.js"><\/script>/i
    },
    {
      name: 'nvd3',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/nvd3/nv.d3.min.js',
      match: /nv.d3.*?\.js"><\/script>/i
    },
    {
      name: 'p5js',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/p5js/lib/p5.min.js',
      match: /p5.*?\.js"><\/script>/i
    },
    {
      name: 'polymaps',
      type: 'file',
      file: jsbin.static + '/vendor/js/components/polymaps/polymaps.min.js',
      match: /polymaps.*?\.js"><\/script>/i
    },
  ];

  return {
    ternDefinitions: ternDefinitions
  };
})();
