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
      return (
        <div onClick={this.inc}>Plus 1</div>
      );
    }

    inc() {
      ValueActionCreators.changeValue(this.props.value + 1);
    }
  }

  module.exports = ValueButton;
})();
