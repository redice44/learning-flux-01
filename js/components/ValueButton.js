(function() {
  'use strict';

  const React = require('react');
  const ValueActionCreators = require('./../actions/ValueActionCreators.js');

  class ValueButton extends React.Component {
    constructor(props) {
      super(props);

      // this Binding
      this.inc = this.inc.bind(this);
    }

    render() {
      let change = this.props.change;
      return (
        <div onClick={this.inc}>Change {change}</div>
      );
    }

    inc() {
      ValueActionCreators.changeValue(this.props.change);
    }
  }

  module.exports = ValueButton;
})();
