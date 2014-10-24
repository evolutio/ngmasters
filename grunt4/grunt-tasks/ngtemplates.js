module.exports = function(grunt, options){
    return {
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
    };
};