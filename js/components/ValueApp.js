(function() {
  'use strict';

  const React = require('react');
  const ValueDisplay = require('./ValueDisplay.js');
  const ValueButton = require('./ValueButton.js');
  const ValueStore = require('./../stores/ValueStore.js');

  function getStateFromStore() {
    return {
      value: ValueStore.get()
    };
  }

  class ValueApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = getStateFromStore();

      // bindings
      this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
      ValueStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
      ValueStore.removeChangeListener(this._onChange);
    }

    render() {
      let val = this.state.value;
      return (
        <div>
          <ValueDisplay value = {val} />
          <ValueButton value = {val} />
          <ValueButton value = {val} />
          <ValueButton value = {val} />
        </div>
      );
    }

    _onChange() {
      this.setState(getStateFromStore());
    }
  }

  module.exports = ValueApp;
})();
