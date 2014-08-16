module.exports = function(grunt) {

  //1. Carrega plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');

  var concamina_tasks = [
    'clean:before',
    'concat:build', 
    'uglify:build', 
    'copy:myapp', 
    'clean:after', 
  ];

  var concamina_cachetemlpates_tasks = [
    'clean:before',
    'concat:build', 
    'ngtemplates',
    'concat:withtemplates', 
    'uglify:build', 
    'copy:myapp', 
    // 'clean:after', 
  ];

  //2. Registra tarefas
  grunt.registerTask('concamina', concamina_tasks);
  grunt.registerTask('concamina_cache', concamina_cachetemlpates_tasks);

  //3. Configura tarefas
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      before: ['build', 'tmp'],
      after: ['tmp']
    },
    concat: {
      build: {
        src: [
          '../js/base2.js',
          '../js/ajax2.js',
          '../js/github_api3.js',
          '../js/components/gh-*/**/*.js',
          '../js/components/popup.js',
        ],
        dest: 'tmp/myapp.js'
      },
      withtemplates: {
        src: [
          'tmp/myapp.js',
          'tmp/myapp-templates.js'
        ],
        dest: 'tmp/myapp.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: ['tmp/myapp.js'],
        dest: 'tmp/myapp.min.js'
      }
    },
    copy: {
      myapp: {
        cwd: 'tmp',
        expand: true,
        src: '**/*.js',
        dest: 'build/js/',
      },
    },
    ngtemplates: {
      myapp: {
        src: 'js/**/*.html',
        dest: 'tmp/myapp-templates.js',
        cwd: '../',
        options: {
          prefix: '/',
          htmlmin: {
            collapseBooleanAttributes:      false,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, // Only if you don't use comment directives!
            removeEmptyAttributes:          false,
            removeRedundantAttributes:      false,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        }
      }
    },
  });
};