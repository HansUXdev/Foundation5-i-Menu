module.exports = function(grunt) {

  grunt.config('connect', {
      options: {
        port: '<%= config.port %>',
        livereload: 35729,
        // keepalive: true,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.live %>/'
          ]
        }
      },
  });


};
