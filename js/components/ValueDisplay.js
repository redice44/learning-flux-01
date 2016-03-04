(function() {
  'use strict';

  const React = require('react');
  const ValueStore = require('./../stores/ValueStore.js');

  class ValueDisplay extends React.Component {
    constructor(props) {
      super(props);
    }


    render() {
      let value = this.props.value;
      return (
        <div>
          {value}
        </div>
      );
    }
  }

  module.exports = ValueDisplay;
})();
