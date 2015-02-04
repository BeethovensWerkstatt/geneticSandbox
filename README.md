# Genetic Sandbox

This tool is a playground for discussing genetic processes in manuscripts. It requires a high-res facsimile as exported from Photoshop (Export -> Zoomify), and an SVG file with 
all graphical items under consideration as <svg:path>. The SVG file should have the name "genetic.svg", and should be placed in the /dist folder. The "TileGroupN" folders with
the facsimile tiles have to be placed in a folder /image inside the /dist folder. 

In oder to use the Genetic Sandbox, just open the index.html file in the /dist folder. The tool allows to select a color and click on shapes to color them correspondigly. By pressing the space bar, all SVG shapes can be hidden and shown. 

## Installation

In order to install this development version of the Genetic Sandbox, you need [node.js]. Please refer to their homepage for OS-specific installers.

All commands have to be executed in the root directory of your project.

#### 1. install nodeJS
Refer to their homepage for a OS-specific installer for your system.

#### 2. initialize dependencies
All dependencies are managed by [grunt] and [bower]. In the root directory of your workspace, run the following command:

`npm install` 

This will download and setup the development listed in your *package.json* file. As a result you'll get a folder 'node_modules' being created. 
** Note: ** watch your console for errors during `npm install` to ensure you get a working installation. Sometimes administrator rights are needed for a correct install. 
This is the case on Mac OSX, for instance. On such systems, you need to add `sudo ` before all npm-based commands like so:

`sudo npm install`

##### Grunt-cli
If you've never used Grunt before, you have to install the command-line interface for Grunt (Grunt-cli).

`npm install grunt-cli -g`

##### Compass
Genetic Sandbox is based on [Sass], which is is compiled to CSS. For this compilation, a version of [compass] needs to be available 
on your machine. Go to their website for an OS-specific installer. 


#### 3. initialize Bower
Bower manages the higher-level dependencies. If you haven't installed bower on your computer yet, run

`npm install -g bower`

When Bower is installed, run the following command in the main directory:

`bower install`

This will download the dependencies listed in bower.json to a folder 'bower_components'. 

## Grunt command reference

Call the following commands in the root directory of your application for common tasks:

Task | Description
-------- | ----------------
`grunt` | default Grunt task will compile everything to the `dist` directory
`grunt watch`| this task will compile everything and will watch for changes. It doesn't reload the website automatically.

## License
Genetic Sandbox is available under the GNU Affero General Public License (AGPL) v3. 


[mei]:http://www.music-encoding.org/
[eXist]:http://eXist-db.org
[data model]:https://github.com/BeethovensWerkstatt/Data-Model
[Beethovens Werkstatt]:http://beethovens-werkstatt.de
[sample installation]:http://beethovens-werkstatt.de/demo/index.html
[node.js]:http://nodejs.org
[grunt]:http://gruntjs.com
[bower]:http://bower.io
[Sass]:http://sass-lang.com
[compass]:http://compass-style.org
[their website]:http://compass-style.org/install
