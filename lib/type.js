var fs = require('fs.extra');
var path = require('path');
var chalk = require('chalk');

var initType = function(type, module, filename) {
	if(type === 'action') {
		createAction(module, filename);
	} else if(type === 'component') {
		createComponent(module, filename);
	} else if(type === 'store') {
		createStore(module, filename);
	} else if(type === 'constant') {
		createConstant(module, filename);
	}
}

function _resolvePath(pathType, templateType, module, filename) {
	if(pathType === 'src') {
		if(templateType === 'component') {
			return path.join(__dirname, '..' ,'templates/' + templateType + 's/' + 'sample.template.react.js');	
		}
		return path.join(__dirname, '..' ,'templates/' + templateType + 's/' + templateType + '.template' + '.js');
	} else if(pathType === 'dest') {
		if(templateType === 'component') {
			return path.join(templateType + 's/'+ module + '', filename + '.react.js');	
		}
		return path.join(templateType + 's/'+ module + '', filename + '.js');	
	}
}

var existsClr = chalk.bold.red;
var successClr = chalk.bold.green;

function createAction(module, filename) {
	var file = fs.readFileSync(_resolvePath('src', 'action', module, filename), 'utf-8');
	var re = /<>/gi;
	var modFile = file.replace(re, filename);
	try {
		fs.accessSync(_resolvePath('dest', 'action', module, filename), fs.R_OK | fs.W_OK);		
		console.log(existsClr('File already exists'));
	} catch(e) {
		fs.writeFileSync(_resolvePath('dest', 'action', module, filename), modFile);
		console.log(successClr('Action file: %s created in module: %s'), filename, module);
	}
}

function createComponent(module, filename) {
	var file = fs.readFileSync(_resolvePath('src', 'component', module, filename), 'utf-8');
	var re = /<>/gi;
	var modFile = file.replace(re, filename);
	try {
		fs.accessSync(_resolvePath('dest', 'component', module, filename), fs.R_OK | fs.W_OK);
		console.log(existsClr('File already exists'));
	} catch(e) {
		fs.writeFileSync(_resolvePath('dest', 'component', module, filename), modFile);	
		console.log(successClr('Component file: %s created in module: %s'), filename, module);
	}
}

function createStore(module, filename) {
	var file = fs.readFileSync(_resolvePath('src', 'store', module, filename), 'utf-8');
	var re = /<>/gi;
	var modFile = file.replace(re, filename);
	try {
		fs.accessSync(_resolvePath('dest', 'store', module, filename), fs.R_OK | fs.W_OK);
		console.log(existsClr('File already exists'));
	} catch(e) {
		fs.writeFileSync(_resolvePath('dest', 'store', module, filename), modFile);	
		console.log(successClr('Store file: %s created in module: %s'), filename, module);
	}
}

function createConstant(module, filename) {
	var file = fs.readFileSync(_resolvePath('src', 'constant', module, filename), 'utf-8');
	var re = /<>/gi;
	var modFile = file.replace(re, filename);
	try {
		fs.accessSync(_resolvePath('dest', 'constant', module, filename), fs.R_OK | fs.W_OK);
		console.log(existsClr('File already exists'));
	} catch(e) {
		fs.writeFileSync(_resolvePath('dest', 'constant', module, filename), modFile);	
		console.log(successClr('Constant file: %s created in module: %s'), filename, module);
	}
}


module.exports = initType;