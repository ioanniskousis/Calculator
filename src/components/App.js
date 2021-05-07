import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleClick = e => {
    const buttonName = e.target.getAttribute('id');

    const calculator = { total, next, operation };
    const result = calculate(calculator, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const output = (operation === '=') ? total.toString() : next.toString();
  return (
    <div className="app" id="app">
      <Display
        output={output}
        total={total}
        operation={operation}
      />
      <ButtonPanel
        clickHandler={handleClick}
      />
    </div>
  );
};

export default App;
