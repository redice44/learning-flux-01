(function() {
  'use strict';
  
  const assign = require('object-assign');
  const EventEmitter = require('events').EventEmitter;
  const ValueDispatcher = require('./../dispatcher/ValueDispatcher.js');
  const ValueConstants = require('./../constants/ValueConstants.js');

  const ActionTypes = ValueConstants.ActionTypes;
  const CHANGE_EVENT = 'change';

  let _value = 0;

  let ValueStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    get: function() {
      return _value;
    },
  });

  ValueStore.dispatchToken = ValueDispatcher.register((action) => {
    switch(action.type) {
      case ActionTypes.CHANGE_VALUE:
        _value = action.value;
        ValueStore.emitChange();
        break;
      default:
        // do nothing
    }
  });

  module.exports = ValueStore;
})();