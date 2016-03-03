(function() {
  'use strict';

  const React = require('react');

  let ValueDisplay = React.createClass({
    render: () => {
      return (
        <div>
          I'm a display!
        </div>
      );
    }
  });

  module.exports = ValueDisplay;
})();
