var fs = require('fs.extra');
var path = require('path');
var Promise = require('promise');

module.exports = function(appname) {
	fs.mkdirp('../' + appname, function (err) {
	  if (err) {
	    console.error(err);
	  } else {
	    createDirs(appname);
	  }
	});
};

function createDirs(appname) {
	makeDir(appname, 'action').then(function() {
		return makeDir(appname, 'component');
	}).then(function() {
		return makeDir(appname, 'constant');
	}).then(function() {
		return makeDir(appname, 'store');
	}).then(function() {
		return makeDir(appname, 'dispatcher');
	}).catch(function(error) {
		console.log('error', error);
	});
}

function makeDir(appname, type) {
	return new Promise(function(resolve, reject) {
		if(type === 'dispatcher') {
			fs.mkdirp(path.join(appname, 'dispatcher'), function (err) {
			  if (err) {
			    console.error(err);
			    reject('broke !');
			  } else {
			  	copyDispatcher(appname);
			  	copyIndex(appname);
			  	copyEntryPoint(appname);
				copyWebpackConfig(appname);
				copyPackageJson(appname);
				resolve('init');
			  }
			});	
		} else {
			fs.mkdirp(path.join(appname, type + 's/core/'), function (err) {
				if(err) reject(Error('broke'));
				copyTemplate(type, appname);
				resolve('init');
			});
		}
	});
}

function copyWebpackConfig(appname) {
	fs.copy(path.join(__dirname, '..', 'templates/webpack.config.js'), path.join(appname, 'webpack.config.js'), { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory
	    throw err;
	  }
	});
}

function copyIndex(appname) {
	fs.copy(path.join(__dirname, '..', 'templates/index.html'), path.join(appname, 'index.html'), { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory
	    throw err;
	  }
	});
}

function copyEntryPoint(appname) {
	fs.copy(path.join(__dirname, '..', 'templates/app.js'), path.join(appname, 'app.js'), { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory
	    throw err;
	  }
	});
}

function copyPackageJson(appname) {
	var contentBuffer = fs.readFileSync(path.join(__dirname, '..', 'templates/package.json'));
	var contentJSON = JSON.parse(contentBuffer);
	contentJSON.name = appname;
	fs.writeFileSync(path.join(appname, 'package.json'), JSON.stringify(contentJSON, null, 2));
}

function copyDispatcher(appname) {
	fs.copy(path.join(__dirname, '..', 'templates/dispatcher/AppDispatcher.js'), path.join(appname, 'dispatcher/AppDispatcher.js'), { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory
	    throw err;
	  }
	});	
}

function copyTemplate(type, appname) {
	if(type === 'action') {
		fs.copy(path.join(__dirname, '..', 'templates/actions/action.js'), path.join(appname, 'actions/core/action.js'), { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory
		    throw err;
		  }
		});
	}
	else if(type === 'component') {
		fs.copy(path.join(__dirname, '..', 'templates/components/sample.react.js'), path.join(appname, 'components/core/sample.react.js'), { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory
		    throw err;
		  }
		});
	}
	else if(type === 'constant') {
		fs.copy(path.join(__dirname, '..', 'templates/constants/constant.js'), path.join(appname, 'constants/core/constant.js'), { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory
		    throw err;
		  }
		});
	}
	else if(type === 'store') {
		fs.copy(path.join(__dirname, '..', 'templates/stores/store.js'), path.join(appname, '/stores/core/store.js'), { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory
		    throw err;
		  }
		});
	}
}