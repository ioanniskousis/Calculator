/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: '',
      result: '0',
    };
  }

  handleClick(buttonName) {
    calculate(this.state, buttonName);
  }

  render() {
    const { result } = this.props;
    return (
      <div>
        <div className="App">
          <Display
            result={result}
          />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  total: PropTypes.number,
  next: PropTypes.number,
  operation: PropTypes.string,
  result: PropTypes.string,
};

App.defaultProps = {
  total: 0,
  next: 0,
  operation: '',
  result: '0',
};

export default App;
