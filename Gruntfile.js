module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          './dist/style.min.css': ['./reset.css', './common.css', './nav.css', './header.css', './article.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);
};