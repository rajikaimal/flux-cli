#!/usr/bin/env node
var program = require('commander');
var chalk = require('chalk');
var version = require('../package.json').version;
var init = require('../lib/init');
var initType = require('../lib/type');

var clr = chalk.bold.cyan;

program
  .command('init <appname>')
  .alias('i')
  .description('initialize flux application')
  .action(function(appname){
    var initializeClr = chalk.bold.yellow;
    console.log(initializeClr('Initializing flux application: %s'), appname);
    init(appname);
  });

program
  .command('action <name>')
  .alias('a')
  .description('create action file')
  .action(function(name){
    console.log(clr('Creating action: %s'), name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('action', module, actionName);
  });

program
  .command('component <name>')
  .alias('c')
  .description('create component file')
  .action(function(name){
    console.log(clr('Creating component: %s'), name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('component', module, actionName);    
  });

program
  .command('store <name>')
  .alias('s')
  .description('create store file')
  .action(function(name){
    console.log(clr('Creating store: %s'), name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('store', module, actionName);
  });

program
  .command('constant <name>')
  .alias('k')
  .description('create constant file')
  .action(function(name){
    console.log(clr('Creating constant: %s'), name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('constant', module, actionName);
  });


program.parse(process.argv);