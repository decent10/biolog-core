Package.describe({
  name: 'biolog:biolog-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'defines namespace for biolog packages and some core utility functions',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.1');
    api.addFiles('biolog-core.js');
    api.export("biolog", ["client", "server"]);
});

//Package.onTest(function(api) {
//  api.use('ecmascript');
//  api.use('tinytest');
//  api.use('biolog:biolog-core');
//  api.addFiles('biolog-core-tests.js');
//});
