module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: "js/src/*.js",
            options: {
                configFile: 'conf/eslint.json'
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: {
                    'js/dist/filtering_long_lists.js': 'js/src/filtering_long_lists.js'
                }
            }
        },
        qunit: {
            all: ['tests/test-runner.html']
        },
        watch: {
            scripts: {
                files: ['js/src/*.js', 'tests/*.js'],
                tasks: ['eslint', 'babel', 'qunit'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['eslint', 'babel', 'qunit', 'watch']);

};