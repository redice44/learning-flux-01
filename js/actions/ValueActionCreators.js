(function() {
  'use strict';

  const ValueDispatcher = require('./../dispatcher/ValueDispatcher.js');
  const ValueConstants = require('./../constants/ValueConstants.js');

  const ActionTypes = ValueConstants.ActionTypes;

  module.exports = {

    changeValue: function(value) {
      ValueDispatcher.dispatch({
        type: ActionTypes.CHANGE_VALUE,
        value: value
      });
    }
  };
})();
