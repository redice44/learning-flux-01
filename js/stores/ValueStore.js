(function() {
  'use strict';
  
  const assign = require('object-assign');
  const EventEmitter = require('events').EventEmitter;
  const ValueDispatcher = require('./../dispatcher/ValueDispatcher.js');
  const ValueConstants = require('./../constants/ValueConstants.js');

  const ActionTypes = ValueConstants.ActionTypes;
  const CHANGE_EVENT = 'change';

  let ValueStore = assign({}, EventEmiiter.prototype, {
    emitChange: () => {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: (callback) => {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: (callback) => {
      this.removeListener(CHANGE_EVENT, callback);
    }
  });

  ValueStore.dispatchToken = ValueDispatcher.register((action) => {
    switch(action.type) {
      case ActionTypes.CHANGE_VALUE:
        console.log('Action: Change Value');
        break;
      default:
        // do nothing
    }
  });
})();