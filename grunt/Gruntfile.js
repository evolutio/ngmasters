module.exports = function(grunt) {

  var mockapi = grunt.option('mockapi') || false;

  var api_js = mockapi ? "src/js/api/api_mock.js" : "src/js/api/api.js";

  grunt.log.writeln('=========== BUILD OPTIONS ===========');
  grunt.log.writeln('api_js = '+api_js);
  grunt.log.writeln('=====================================');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      before: ['build', 'tmp'],
      after: ['tmp']
    },
    ngtemplates: {
      estante_content: {
        src: 'js/estante/**/*.html',
        dest: 'tmp/estante-templates.js',
        cwd: 'src/',
        options: {
          prefix: '/build/',
          htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, // Only if you don't use comment directives!
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        }
      }
    },
    concat: {
      build: {
        src: [
          'src/js/estante/estante.js', 
          'src/js/estante/utils.js', 
          'src/js/estante/**/*.js', 
          'tmp/estante-templates.js', 
          api_js],
        dest: 'tmp/estante.js'
      }
    },
    ngmin: {
      fix_angular_declarations: {
        src: 'tmp/estante.js',
        dest: 'tmp/estante.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true,
        mangle: true //setar isso pra falso faz ele usar os nomes de variaveis originais. Mais facil de debugar, arquivo maior.
      },
      build: {
        src: ['tmp/estante.js'],
        dest: 'tmp/estante.min.js'
      }
    },
    sass: {
      compressed: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/estante.min.css': 'src/sass/estante.scss'
        }
      },
      expanded: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/estante.css': 'src/sass/estante.scss'
        }
      }
    },
    copy: {
      angulartemplates: {
        cwd: 'src/js',
        expand: true,
        src: '**/*.html',
        dest: 'build/js/',
      },
      jslib: {
        cwd: 'src/js',
        expand: true,
        src: 'lib/**',
        dest: 'build/js/',
      },
      estante_js: {
        cwd: 'tmp',
        expand: true,
        src: ['estante.js', 'estante.min.js', 'estante.min.map'],
        dest: 'build/js/estante/',
      },
      css: {
        cwd: 'src/css',
        expand: true,
        src: '**/*',
        dest: 'build/css/',
      },
      build: {
        src: ['fonts/**','img/**'],
        dest: 'build/',
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-ngmin');

  // Default task(s).
  var tasks = [
    'clean:before',
    'ngtemplates',
    'concat', 
    'ngmin:fix_angular_declarations',
    'uglify:build', 
    'copy:estante_js', 
    'copy:angulartemplates', 
    'copy:jslib', 
    'sass:compressed',
    'sass:expanded',
    'copy:css',
    'copy:build',
//    'clean:after'
  ];
  grunt.registerTask('default', tasks);

};