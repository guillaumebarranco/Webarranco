module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {
			all : ['app/webroot/js/main.js', 'app/webroot/js/projects.js', 'app/webroot/js/bubbles.js', 'app/webroot/js/zelda/movement.js' ]
		},

		cssmin: {
			combine: {
				files: {
					'app/webroot/css/min.css': ['app/webroot/css/foundation.css', 'app/webroot/css/foundation-icons.css', 'app/webroot/css/lightbox.css', 'app/webroot/css/index.css']
				}
			}
		},

		uglify: {
		    fusionJS: {
				files: {
					'app/webroot/js/min.js': ['app/webroot/js/main.js', 'app/webroot/js/classie.js', 'app/webroot/js/bubbles.js', 'app/webroot/js/modernizr.js', 'app/webroot/js/lightbox.min.js']
				}
		    },
		    zeldaJS: {
				files: {
					'app/webroot/js/zelda/min.js' : ['app/webroot/js/zelda/movement.js']
				}
		    }
		},

		imagemin: {
			dynamic: { 
				files: [{
				    expand: true,
				    cwd: 'app/webroot/img',
				    src: ['**/*.{png,jpg,gif}'],
				    dest: 'app/webroot/img/build'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('all', ['jshint', 'cssmin', 'uglify', 'imagemin']);
	grunt.registerTask('compress', ['cssmin', 'uglify']);
	grunt.registerTask('js', ['jshint', 'uglify']);
	grunt.registerTask('css', ['cssmin']);
}