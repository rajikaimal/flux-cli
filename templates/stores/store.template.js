import AppDispatcher from '../../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import <>Constants from '../../constants/core/<>constant';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

const <>Store = assign({}, EventEmitter.prototype, {
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

export default <>Store;