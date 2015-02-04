/*
 *
 * Copyright (c) 2014 eXist Solutions
 * Licensed under the MIT license.
 */

'use strict';

/* jshint indent: 2 */

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // Project configuration.
    grunt.initConfig({
        

        // Before generating any new files, remove any previously-created files.
        clean: {
            pre: ['build', 'dist'],
            post: ['resources/js/app.min.js']
        },

        

        /*
        Copy copies all relevant files for building a distribution in 'dist' directory
        */
        // CSS and JS resources are copied as they get processed by their respective optimization tasks later in the chain.
        // png images will not be copied as they will get optimized by imagemin
        copy: {
            main: {
                files: [
                    /*{expand: true,
                        cwd: './',
                        flatten: true,
                        src: ['bower_components/facsimileViewer/leaflet.facsimileViewer.js'],
                        dest: 'dist/resources/js/',
                        filter: 'isFile'
                    }*/
                    {expand: true,
                        cwd: './',
                        flatten: true,
                        src: ['bower_components/jquery/dist/jquery.min.js'],
                        dest: 'dist/resources/js/',
                        filter: 'isFile'
                    },
                    {expand: true,
                        cwd: './',
                        flatten: false,
                        src: ['index.html','resources/js/images/*','resources/css/*'],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        
        /*
         minifies the file 'resources/js/app.js'. Creates a minified version 'app.min.js'. Using a fixed and unconfigurable
         name makes substitution in html page easier - see build comments at the end of html files.
         */
        uglify: {
            dist: {
                files: {
                    'dist/resources/js/app.min.js': [     
                        'resources/js/leaflet.js', //we need to use this version of leaflet (0.8-dev) until 0.8 is stable and our library can be made compatible 
                        'bower_components/facsimileViewer/leaflet.facsimileViewer.js',
                        'bower_components/jquery/dist/jquery.min.js',
                        'resources/js/main.js'
                    ]
                }
            }
        },
        
        /*
         * compiles all files from resources/scss to dist/resources/css. 
         * in resources/scss, only main.scss is expected to be found. If other files
         * are needed, they should be named with a leading underscore ("_imports.scss")
         * and imported with sass
         */
        compass: {
            dist: {
                options: {
                    sassDir: 'resources/scss',
                    cssDir: 'dist/resources/css'
                }
            }
        },
                
        processhtml: {
            dist: {
                options: {
                    data: {
                        minifiedCss: '<link href="resources/css/sourceViewer.min.css" type="text/css" rel="stylesheet"/>'
                    }
                },
                files: {
                    'dist/index.html': ['./index.html']
                }
            }
        },

        /*
         watches gruntfile itself and checks for problems
         */
        watch: {
            scripts: {
                files: ['resources/js/main.js'],
                tasks: ['uglify']
            },
            
            css: {
                files: ['resources/scss/*.scss'],
                tasks: ['compass','copy']
            }
            ,
            
            html: {
                files: ['index.html'],
                tasks: ['copy']
            }
        }



    });

    /*
     */
    grunt.registerTask('default', [
        /*'clean:pre',*/
        'copy',
        'uglify',
        'compass'
        /*'cssmin',*/
        /*'concat',*/
        /*'processhtml',*/
        /*'clean:post'*/
    ]);
    /*
    grunt.registerTask('dist', [
        'clean:pre',
        'replace',
        'copy',
        'uglify',
        'compass',
        'cssmin',
        'concat',
        'processhtml',
        'zip:production',
        'clean:post'
    ]);*/

};
