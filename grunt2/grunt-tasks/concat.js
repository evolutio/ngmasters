module.exports = function(grunt, options){
    return {
		build: {
			src: options.arquivosjs,
			dest: 'tmp/myapp.js'
		},
		withtemplates: {
			src: [
				'tmp/myapp.js',
				'tmp/myapp-templates.js'
			],
			dest: 'tmp/myapp.js'
		}
    };
};