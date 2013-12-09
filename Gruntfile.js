
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    nodeunit: {
      tests: [
        "test/**/*.js"
      ]
    },
    jshint: {
      files: {
        src: [
          "Gruntfile.js",
          "test/**/*.js"
        ]
      }
    }
  });

  // Default tasks are contrib plugins
  grunt.loadNpmTasks("grunt-contrib-nodeunit");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  // Default task.
  grunt.registerTask("default", ["jshint", "nodeunit"]);
};