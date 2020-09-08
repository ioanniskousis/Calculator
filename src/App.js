import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const { reactLinkText } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {reactLinkText}
        </a>
      </header>
    </div>
  );
}

App.propTypes = {
  reactLinkText: PropTypes.string,
};

App.defaultProps = {
  reactLinkText: 'Learn React',
};

export default App;
