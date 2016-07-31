var mocha = require('mocha');
var init = require('../lib/init');
var fs = require('fs');

describe('Initialize application', function() {
    it('should initialize application', function(done) {
    	init('mobx');
    	fs.stat('../mobx', function(err, buff) {
    		if(err) throw new Error('error ...');
    		
    		fs.rmdir('../mobx', function(err, status) {
    			if(err) throw new Error('error ...');

    			done();
    		});
    	});
    });
});