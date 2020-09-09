import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="App">
          <Display />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
