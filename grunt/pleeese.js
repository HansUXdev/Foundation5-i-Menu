// Post-process your css with vendor prefix

module.exports = function(grunt) {

    grunt.config('pleeease', {

      foundation: {
        options: {
          minifier: true, // set true for production
          filters: { "oldIE": true },
          // out: .min.css
        },
        files: {
          '<%= config.css %>/foundation.min.css': '<%= config.css %>/foundation.css',
        }
      },

   });


};

