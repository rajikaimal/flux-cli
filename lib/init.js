var fs = require('fs.extra');

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
	fs.mkdirp('../' + appname + '/actions/core', function (err) {
	  if (err) {
	    console.error(err);
	  } else {
	  	copyTemplate('action', appname);
		fs.mkdirp('../' + appname + '/components/core', function (err) {
		  if (err) {
		    console.error(err);
		  } else {
	  		copyTemplate('component', appname);
		  	fs.mkdirp('../' + appname + '/constants/core', function (err) {
			  if (err) {
			    console.error(err);
			  } else {
		  		copyTemplate('constant', appname);
			  	fs.mkdirp('../' + appname + '/stores/core', function (err) {
				  if (err) {
				    console.error(err);
				  } else {
				  	copyTemplate('store', appname);
					fs.mkdirp('../' + appname + '/dispatcher', function (err) {
					  if (err) {
					    console.error(err);
					  } else {
					  	copyDispatcher(appname);
					  	copyEntryPoint(appname);
						copyWebpackConfig(appname);
						copyPackageJson(appname);
					  }
					});
				  }
				});
			  }
			});  
		  }
		});
	  }
	});
}

function copyWebpackConfig(appname) {
	fs.copy('templates/webpack.config.js', '../' + appname + '/webpack.config.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});
}

function copyEntryPoint(appname) {
	fs.copy('templates/app.js', '../' + appname + '/app.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});
}

function copyPackageJson(appname) {
	var contentBuffer = fs.readFileSync('templates/package.json');
	var contentJSON = JSON.parse(contentBuffer);
	contentJSON.name = appname;
	fs.writeFileSync('../' + appname + '/package.json', JSON.stringify(contentJSON,null, 2));
}

function copyDispatcher(appname) {
	fs.copy('templates/dispatcher/AppDispatcher.js', '../' + appname + '/dispatcher/AppDispatcher.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});	
}

function copyTemplate(type, appname) {
	if(type === 'action') {
		fs.copy('templates/actions/action.js', '../' + appname + '/actions/core/action.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
	else if(type === 'component') {
		fs.copy('templates/components/sample.react.js', '../' + appname + '/components/core/sample.react.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
	else if(type === 'constant') {
		fs.copy('templates/constants/constant.js', '../' + appname + '/constants/core/constant.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
	else if(type === 'store') {
		fs.copy('templates/stores/store.js', '../' + appname + '/stores/core/store.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
}