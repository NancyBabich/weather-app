module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['pages/index.html', 'sass/style.sass', 'js/script.js', 'css/style.css'],
        tasks: ['pug', 'sass', 'postcss'],
        options: {
          spawn: false
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    browserSync: {
      bsFiles: {
        src: ['css/style.min.css', 'pages/index.html', 'js/script.js']
      },
      options: {
        watchTask: true,
        server: ['./css', './pages', './js', './owfont']
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [require('cssnano')({ zindex: false })]
      },
      dist: {
        src: 'css/style.css',
        dest: 'css/style.min.css'
      }
    },

    pug: {
      dist: {
        src: 'pug/index.pug',
        dest: 'pages/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-pug');

  grunt.registerTask('default', ['pug', 'sass', 'postcss', 'browserSync', 'watch']);
};
