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
    
  });

program
  .command('action <name>')
  .alias('a')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating action: %s', name);
  }).on('--help', function() {
  
  });

program
  .command('component <name>')
  .alias('c')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating component: %s', name);
  }).on('--help', function() {
 
  });

program
  .command('store <name>')
  .alias('s')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating store: %s', name);
  }).on('--help', function() {
 	
  });


program.parse(process.argv);