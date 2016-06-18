var AppDispatcher = require('../../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var <>Constants = require('../../constants/core/<>constant');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var <>Store = assign({}, EventEmitter.prototype, {
  <>Method: function () {
    console.log('invoked !!!');
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register(function (payload) {
  switch (payload.action.actionType) {
    case (<>Constants.INCREMENT):
      SampleStore.<>Method();
      SampleStore.emitChange();
      break;
  }
});

module.exports = <>Store;