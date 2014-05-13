'use strict';
module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-mocha');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    copy: {
      all: {
        expand: true,
        cwd: 'public/',
        src: ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    },

    browserify: {
      all: {
        src: 'src/*.js',
        dest: 'dist/app.js'
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
    },

    connect: {
      options: {
        port: process.env.PORT || 3000,
        base: 'dist/',
      },

      all: {},
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: '<%= copy.all.src %>',
      },

      js: {
        files: '<%= browserify.all.src %>',
        tasks: ['browserify'],
      },

      assets: {
        files: ['assets/**/*', '*.css', 'images/**/*', 'img/**/*', '!Gruntfile.js'],
        tasks: ['copy'],
      }
    },

    mocha: {
      test: {
        src: ['test/browser/*.html'],
        options: {
          run: true,
        },
      },
    }

  });

  //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'clean', 'browserify', 'copy']);
  grunt.registerTask('server', ['default', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'browserify', 'copy']);
  grunt.registerTask('test', ['mocha']);

};
