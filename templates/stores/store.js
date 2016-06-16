var AppDispatcher = require('../../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SampleConstants = require('../../constants/core/constant');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var counter = 0;

var SampleStore = assign({}, EventEmitter.prototype, {
  saveCount: function () {
    counter++;
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
    case (SampleConstants.INCREMENT):
      SampleStore.saveCount();
      SampleStore.emitChange();
      break;
  }
});

module.exports = SampleStore;