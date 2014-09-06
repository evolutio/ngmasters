module.exports = function(grunt) {
    var phantom = grunt.option('phantom') || false;

    var dados_comuns_disponiveis_pra_todas_as_tasks = {
        phantom: phantom,
        arquivosjs: [
            '../js/base2.js',
            '../js/ajax2.js',
            '../js/github_api3.js',
            '../js/components/gh-*/**/*.js',
            '../js/components/popup.js',
        ],
        pkg: grunt.file.readJSON('package.json')
    };


    // Conta o tempo das tasks facilitando a identificação de tasks carroça
    require('time-grunt')(grunt);

    // Carrega configurações da pasta grunt-configs/
    var path = require('path');
    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'grunt-tasks'),
        data: dados_comuns_disponiveis_pra_todas_as_tasks
    });

};