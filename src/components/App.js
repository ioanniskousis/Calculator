/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
// /* eslint-disable no-unused-vars */
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
      total: props.total,
      next: props.next,
      operation: props.operation,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { state } = this;
    const result = calculate(state, buttonName);
    const { total, next, operation } = result;
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { operation } = this.state;
    const total = this.state.total ? this.state.total : '0';
    const next = this.state.next ? this.state.next : '0';
    const output = (operation === '=') ? total : next;
    return (
      <div>
        <div className="App" id="App">
          <Display
            output={output}
            total={total}
            operation={operation}
          />
          <ButtonPanel
            clickHandler={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

App.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

export default App;
