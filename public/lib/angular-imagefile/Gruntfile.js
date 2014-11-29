module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/concat.js'
      }
    },

    uglify: {
      options: {
        compress: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/concat.js',
        dest: 'dist/angular-imagefile.min.js'
      }
    },
    clean: ['dist/concat.js', 'example/js/angular-imagefile.min.js'],
    copy: {
      main: {
        src: 'dist/angular-imagefile.min.js',
        dest: 'example/js/angular-imagefile.min.js',
        flatten: true
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['concat', 'uglify', 'clean', 'copy']);
}
