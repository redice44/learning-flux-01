(function() {
  'use strict';

  const React = require('react');
  const ValueDisplay = require('./ValueDisplay.js');
  const ValueButton = require('./ValueButton.js');

  let ValueApp = React.createClass({
    render: () => {
      return (
        <div>
          <ValueDisplay />
          <ValueButton />
          <ValueButton />
          <ValueButton />
        </div>
      );
    }
  });

  module.exports = ValueApp;
})();
