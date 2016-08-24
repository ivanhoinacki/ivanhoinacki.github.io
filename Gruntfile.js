module.exports = function(grunt) {
  'use strict';

  // Load the plugin that clean files and directories.
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin to Replaces references from non-optimized scripts,
  // stylesheets and other assets to their optimized version within a
  // set of HTML files (or any templates/views)
  grunt.loadNpmTasks('grunt-usemin');
  // Load the plugin to Minify HTML
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Load the plugin to Minify HTML - 2
  grunt.loadNpmTasks('grunt-html-minify');
  // Load the plugin to Minify images
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Load the plugin to Compress CSS files.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load the plugin to Concatenate files.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Load the plugin that minify and concatenate ".js" files.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that create directories with Grunt.
  grunt.loadNpmTasks('grunt-mkdir');
  // Load the plugin that copy files and directories.
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load the plugin to Static file asset revisioning through content hashing
  grunt.loadNpmTasks('grunt-rev');
  // Automatic notifications when tasks fail.
  grunt.loadNpmTasks('grunt-notify');
  // compress html
  grunt.loadNpmTasks('grunt-minify-html');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),

    /* clean directories */
    clean: {
      build: ['<%= properties.dist %>'],
      'css-js-min': [
        "<%= properties.dist %>/css",
        "<%= properties.dist %>/js"
      ]
    },

    useminPrepare: {
      html: '<%= properties.src %>/index.html',
      options: {
        dest: '<%= properties.dist %>'
      }
    },
    htmlmin: {
      dist: {
        // It´s not work, so I use grunt-html-minify
        //options: {
        // removeComments: true,
        // collapseWhitespace: true
        //},
        files: [{
          expand: true,
          cwd: '<%= properties.src %>',
          dest: '<%= properties.dist %>',
          src: ['*.html'],
        }]
      }
    },
    minifyHtml: {
      options: {},
      dist: {
        files: {
          '<%= properties.dist %>/index.html' : '<%= properties.src %>/index.html',
          '<%= properties.dist %>/about/about.html' : '<%= properties.src %>/about/about.html',
          '<%= properties.dist %>/projects/index.html' : '<%= properties.src %>/projects/index.html',
          '<%= properties.dist %>/blog/index.html' : '<%= properties.src %>/blog/index.html',
          '<%= properties.dist %>/resume/index.html' : '<%= properties.src %>/resume/index.html',
          '<%= properties.dist %>/blog/bower/2015/01/15/incluindo-o-bower-no-dia-a-dia.html' : '<%= properties.src %>/blog/bower/2015/01/15/incluindo-o-bower-no-dia-a-dia.html',
          '<%= properties.dist %>/blog/gruntjs/2015/01/10/iniciando-com-gruntjs.html' : '<%= properties.src %>/blog/gruntjs/2015/01/10/iniciando-com-gruntjs.html',
          '<%= properties.dist %>/blog/prose/2015/01/23/using-prose-edit.html' : '<%= properties.src %>/blog/prose/2015/01/23/using-prose-edit.html',
          '<%= properties.dist %>/blog/web-utils/2014/08/02/web-utils.html' : '<%= properties.src %>/blog/web-utils/2014/08/02/web-utils.html',
          '<%= properties.dist %>/blog/polymer/2015/06/01/introducao-a-o-polymer.html' : '<%= properties.src %>/blog/polymer/2015/06/01/introducao-a-o-polymer.html'
        }
      }
    },
    /* image minification */
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= properties.src %>/images',
          dest: '<%= properties.dist %>/images',
          src: '{,*/}*.{ico,png,jpg,jpeg,gif,webp,svg}'
        }]
      }
    },

    /* concat */
    /* is not necessary to declare */

    /* cssmin */
    /* is not necessary to declare */

    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      }
    },

    /* create dir fonts */
    mkdir: {
      all: {
        options: {
          create: [
            '<%= properties.dist %>/css',
            '<%= properties.dist %>/js'
          ]
        },
      },
    },
    copy: {
      'css-js-min': {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= properties.dist %>/assets/css',
          dest: '<%= properties.dist %>/css',
          src: ['*.*']
        },{
          expand: true,
          dot: true,
          cwd: '<%= properties.dist %>/assets/js',
          dest: '<%= properties.dist %>/js',
          src: ['*.*']
        }]
      }
    },

    /* replace links to minificated files */
    usemin: {
      html: ['<%= properties.dist %>/index.html']
    }
  });

  // tasks
  grunt.registerTask('build', [
    'clean',
    'useminPrepare',
    'htmlmin',
    'imagemin',
    'concat',
    'cssmin',
    'uglify',
    'mkdir',
    'copy',
    // 'rev',
    'usemin',
    'minifyHtml'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
