module.exports = function(grunt, options){
    return {
		build: {
			src: options.arquivosjs,
			dest: 'tmp/myapp.js'
		}
    };
};