module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files:[
        '<%= config.src %>/**/*.html',
        '<%= config.src %>/css/{,*/}*.css',
        '<%= config.src %>/scss/{,*/}*.scss',
        '<%= config.src %>/js/{,*/}*.js',
        '<%= config.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    },
    scss:{
      files:['<%= config.sass %>/**/*.scss'],
      tasks:[
      'sass', 
      // 'compass', // switch to compass
      'pleeease',
      // 'autoprefixer'
      ]
    },
    grunt:{
      files: ['grunt/libsass.js']
    }
  });


};
