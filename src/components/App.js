import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  result: PropTypes.string,
};

App.defaultProps = {
  result: '0',
};

export default App;