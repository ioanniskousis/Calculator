/* eslint-disable no-restricted-globals */
import Big from '../../node_modules/big.js';

function operate(numberOne, numberTwo, operation) {
  let result = new Big(0.0);
  const total = Big(parseFloat(isNaN(numberOne) ? '0' : numberOne));
  const next = Big(parseFloat(isNaN(numberTwo) ? '0' : numberTwo));
  // let result = 0.0;
  // const total = parseFloat(isNaN(numberOne) ? '0' : numberOne);
  // const next = parseFloat(isNaN(numberTwo) ? '0' : numberTwo);
  let divisionByZero = false;

  switch (operation) {
    case '%':
    {
      result = (parseFloat(total) * parseFloat(next)) / 100.0;
      break;
    }
    case '/':
    {
      divisionByZero = (next === null) || (parseFloat(next) === 0.0);
      if (!divisionByZero) {
        result = parseFloat(total) / parseFloat(next);
      }
      break;
    }
    case 'X':
    {
      result = parseFloat(total) * parseFloat(next);
      break;
    }
    case '-':
    {
      result = parseFloat(total) - parseFloat(next);
      break;
    }
    case '+':
    {
      result = parseFloat(total) + parseFloat(next);
      break;
    }
    default:
      break;
  }

  return divisionByZero ? 'DIVISION BY ZERO' : result;
}

export default operate;
