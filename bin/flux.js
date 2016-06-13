#! usr/bin/env node
var program = require('commander');
var version = require('../package.json').version;

program
  .command('init <appname>')
  .alias('i')
  .description('initialize flux application')
  .action(function(appname){
    console.log('---Initializing flux application: %s', appname);
  }).on('--help', function() {
    console.log('  Examples:');
    console.log();
    console.log('    $ deploy exec sequential');
    console.log('    $ deploy exec async');
    console.log();
  });

program.parse(process.argv);