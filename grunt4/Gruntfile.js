module.exports = function(grunt) {

    var dados_comuns_disponiveis_pra_todas_as_tasks = {
        arquivosjs: [
            '../js/base.js',
            '../js/ajax.js',
            '../js/github_api2.js',
            '../js/githubmodel.js',
            '../js/components/gh_*/**/*.js',
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