module.exports = function(grunt) {

  	grunt.config('sass', {
      options: {
          sourceMap: true, // This will help you debug in the browser
        },
        dist: {
            files: {
              '<%= config.css %>/foundation.css': '<%= config.sass %>/foundation.scss',
            }
        }
   });


};
