module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    // vendor: grunt.file.readJSON('.bowerrc').directory,

    // Configure your directory
    config: {
      port: '8000',
      live: './',
      src: './',
      sass: '<%= config.src %>/scss/',
      css: '<%= config.src %>/css',      
    },

  });

  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('grunt');


  grunt.registerTask('css',['sass','pleeease',]);

  grunt.registerTask('server',['connect','watch',]);

  grunt.registerTask('default', [
    'css',
    'server',
  ]);


};