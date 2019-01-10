// This uses a src/images/ dir for originals and makes both a high and low res version
module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      src: ['docs/assets/images/*.jpg'],
    },
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
              width: 800,
              quality: 85,
              rename: false
            },
            {
              name: 'small',
              width: 570,
              quality: 85
            }
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['*.{jpg,png}'],
          dest: 'assets/images/'
        }]
      }
    },
    watch: {
      dev: {
        files: ['src/images/*.{jpg,png}'],
        tasks: ['responsive_images']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('all', ['clean', 'responsive_images']);
  
  grunt.registerTask('default', ['responsive_images', 'watch']);
};