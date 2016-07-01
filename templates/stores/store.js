import AppDispatcher from '../../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import SampleConstants from '../../constants/core/constant';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let counter = 0;

const SampleStore = assign({}, EventEmitter.prototype, {
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

export default SampleStore;