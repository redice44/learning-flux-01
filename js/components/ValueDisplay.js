(function() {
  'use strict';

  const React = require('react');
  const ValueStore = require('./../stores/ValueStore.js');

  function getStateFromStore() {
    return {
      value: ValueStore.get()
    };
  }

  class ValueDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = getStateFromStore();
    }

    componentDidMount() {
      ValueStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
      ValueStore.removeChangeListener(this._onChange);
    }

    render() {
      console.log(this);
      let value = this.state.value;
      return (
        <div>
          {value}
        </div>
      );
    }

    _onChange() {
      console.log('Component Change');
      this.setState(getStateFromStore());
    }
  }
/*
  let ValueDisplay = React.createClass({
    getInitialState: () => {
      return getStateFromStore();
    },

    componentDidMount: () => {
      ValueStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: () => {
      ValueStore.removeChangeListener(this._onChange);
    },

    render: () => {
      console.log(this);
      let value = 1;
      return (
        <div>
          {value}
        </div>
      );
    },

    _onChange: () => {
      console.log('Component Change');
      this.setState(getStateFromStore());
    }
  });
*/
  module.exports = ValueDisplay;
})();
