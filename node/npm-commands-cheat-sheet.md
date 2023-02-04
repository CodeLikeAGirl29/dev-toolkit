# Npm cheat sheet
Thanks to Martin Heidegger (https://github.com/martinheidegger/) for the initial version.

### Community Features
 * adduser (alias: add-user | login)

   Create or Login into the npm server.

   ~~~~~
   npm adduser
   ~~~~~
   (Follow the instructions)

 * whoami

   Outputs as what user you are logged in.

   ~~~~~
   npm whoami
   ~~~~~

 * star <-> unstar

   Changes the rating of a package in the system

   ~~~~~
   npm star express
   ~~~~~

 * view (alias: info | how)

   Shows the information to a package in the package manager

   ~~~~
   npm view socket.io
   ~~~~

 * search (alias: find | s | se)

   Searches for packages using a free text search

   ~~~~
   npm search browserify
   ~~~~

### NPM Information
 * help (alias: apihelp)

   Shows the help for all npm commands.

   ~~~~
   npm help json
   ~~~~

   Recommended reading: developers, json, folder, coding-style

 * faq

   Shows frequently asked questions

   ~~~~
   npm faq
   ~~~~

 * help-search

   Searches through all of the available search topics using an abritary string

   ~~~~
   npm help-search repository
   ~~~~

 * root

   Shows the current npm modules directory

   ~~~~
   npm root
   ~~~~

 * bin

   Shows the current npm bin directory

   ~~~~
   npm bin
   ~~~~

 * prefix

   Shows the folder where npm modules should be installed

   ~~~~
   npm prefix
   ~~~~

 * version

   Shows the currently running npm version

   ~~~~
   npm version
   ~~~~

 * ls (alias la | ll | list)

   Shows what packages are installed

   ~~~~
   npm ls
   ~~~~

### NPM Settings
 * completion

   Tool to enable code completion in bash

   ~~~~
   npm completion >> ~/.bashrc
   ~~~~

 * set <-> get

   Changes or shows a property of npm.

   ~~~~
   npm get repository
   ~~~~

 * config (c)

   Extended access to properties (not just get/set)

   ~~~~
   npm config list
   ~~~~

 * cache

   Tool to manipulate the local package cache.

   ~~~~
   npm cache clean
   ~~~~

 * link (alias: ln)

   Links a folder in the global package space.

   ~~~~
   npm link ~/myLocalPackage
   ~~~~


### Package Creation
 * init

   Wizard to create a package.json file.

   ~~~~
   npm init
   ~~~~

   Note: Follow the wizard dilligently ;-)

 * install <-> rm (alias: uninstall)

   Downloads and installs or uninstalls a package

   ~~~~
   npm install grunt
   ~~~~

   or globally

   ~~~~
   npm install grunt-cli -g
   ~~~~

 * publish <-> unpublish

   Publishes a package to the npm

   ~~~~
   npm publish .
   ~~~~

 * owner (alias: author)

   User manager for the installed package.

   ~~~~
   npm owner add substack .
   ~~~~

 * tag

   Add a tag for a package

   ~~~~
   npm tag underscore@1.4.4 awesome
   ~~~~

 * deprecate

   Mark a package (or a version of it) as deprecated

   ~~~~
   npm deprecate jsdom@0.6.0
   ~~~~

 * outdated

   Checks if any package is outdated.

   ~~~~
   npm outdated
   ~~~~

 * submodule

   Helper to create a submodule at the git directory specified in the package.json of the module.

   ~~~~
   npm submodule example
   ~~~~

 * update (alias: up)

   Updates all packages to the latest version.

   ~~~~
   npm update
   ~~~~

 * shrinkwrap

   Creates a npm-shrinkwrap.json that fixates which versions of which libraries to install

   ~~~~
   npm shinkwrap
   ~~~~

 * dedupe (alias: ddp | find-dupes)

   Removes duplicates of referenced packages

   ~~~~
   npm dedupe
   ~~~~

 * prune

   Removes packages that are installed but not listed in the package.json

   ~~~~
   npm prune
   ~~~~

 * pack

   Creates a tarball from a package

   ~~~~
   npm pack .
   ~~~~

### Package Interaction
 * run-script

   Runs one of the scripts defined in package.json (usually not needed)

   ~~~~
   npm run-script postinstall
   ~~~~

   Possible scripts:
   ~~~~
   preinstall, install, postinstall
   preuninstall, uninstall, postuninstall
   preupdate, update, postupdate
   prepublish, publish, postpublish
   pretest, test, posttest
   prestop, stop, poststop
   prestart, start, poststart
   prerestart
   ~~~~

 * start <-> restart <-> stop

   Starts whatever there is to start.

   ~~~~
   npm start
   ~~~~

 * test (alias: tst)

   Runs tests for the current package

   ~~~~
   npm test
   ~~~~

 * rebuild (alias: rb)

   Build any binary library required for this package.

   ~~~~
   npm rebuild
   ~~~~



