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
	fs.mkdirp('../' + appname + '/actions', function (err) {
	  if (err) {
	    console.error(err);
	  } else {
	  	copyTemplate('action', appname);
		fs.mkdirp('../' + appname + '/components', function (err) {
		  if (err) {
		    console.error(err);
		  } else {
	  		copyTemplate('component', appname);
		  	fs.mkdirp('../' + appname + '/constants', function (err) {
			  if (err) {
			    console.error(err);
			  } else {
		  		copyTemplate('constant', appname);
			  	fs.mkdirp('../' + appname + '/stores', function (err) {
				  if (err) {
				    console.error(err);
				  } else {
				  	copyTemplate('store', appname);
				  	fs.mkdirp('../' + appname + '/stores', function (err) {
					  if (err) {
					    console.error(err);
					  } else {
					  	copyEntryPoint(appname);
					  	copyWebpackConfig(appname);
					  }
					})
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

function copyTemplate(type, appname) {
	if(type === 'action') {
		fs.copy('templates/actions/action.js', '../' + appname + '/actions/action.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
	else if(type === 'component') {
		fs.copy('templates/components/component.js', '../' + appname + '/components/component.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
	else if(type === 'constant') {
		fs.copy('templates/constants/constant.js', '../' + appname + '/constants/constant.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
	else if(type === 'store') {
		fs.copy('templates/stores/store.js', '../' + appname + '/stores/store.js', { replace: true }, function (err) {
		  if (err) {
		    // i.e. file already exists or can't write to directory 
		    throw err;
		  }
		});
	}
}