(function() {
  'use strict';

  const React = require('react');
  const ReactDOM = require('react-dom');
  const ValueApp = require('./components/ValueApp.js');
  
  ReactDOM.render(
    <ValueApp />,
    document.getElementById('react')
  );
})();
