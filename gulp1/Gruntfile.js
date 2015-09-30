module.exports = function(grunt) {

  //1. Carrega plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  //2. Registra tarefas
  grunt.registerTask('concatena', ['concat:build']);

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
    }
  });
};
