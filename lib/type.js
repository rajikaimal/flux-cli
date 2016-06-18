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

function createAction(module, filename) {
	fs.copy('templates/actions/action.js', '../' + appname + '/actions/'+ module +'/'+ filename +'.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});
}

function createComponent(module, filename) {
	fs.copy('templates/components/sample.react.js', '../' + appname + '/components/'+ module +'/'+ filename +'.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});
}

function createStore(module, filename) {
	fs.copy('templates/stores/store.js', '../' + appname + '/stores/'+ module +'/'+ filename +'.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});
}

function createConstant(module, filename) {
	fs.copy('templates/constants/constant.js', '../' + appname + '/constants/'+ module +'/'+ filename +'.js', { replace: true }, function (err) {
	  if (err) {
	    // i.e. file already exists or can't write to directory 
	    throw err;
	  }
	});
}


module.exports = initType;