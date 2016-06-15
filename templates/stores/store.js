var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SampleConstants = require('../constants/SampleConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var sampleArray = [];

var SampleStore = assign({}, EventEmitter.prototype, {
  doSomething: function (data) {
    sampleArray.push(data);
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
    case (SampleConstants.SAMPLE):
      SampleStore.doSomething(payload.action.data);
      SampleStore.emitChange();
      break;
  }
});

module.exports = SampleStore;