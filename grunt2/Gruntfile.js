module.exports = function(grunt) {

  //1. Carrega plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var concamina_tasks = [
    'concat:build',
    'uglify:build'
  ];

  //2. Registra tarefas
  grunt.registerTask('concamina', concamina_tasks);

  var arquivosjs = [
    '../js/base.js',
    '../js/ajax.js',
    '../js/github_api2.js',
    '../js/githubmodel.js',
    '../js/components/gh_*/**/*.js',
    '../js/components/popup.js',
  ];

  console.log(arquivosjs);

  //3. Configura tarefas
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: arquivosjs,
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
    }
  });
};