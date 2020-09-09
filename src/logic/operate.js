import Big from './big.mjs';

function operate(numberOne, numberTwo, operation) {
  let total = Big(0);

  switch (operation) {
    case '%': /* percentage */
    {
      total = (numberOne * numberTwo) / 100.0;
      break;
    }
    case '/': /* divide */
    {
      total = numberOne / numberTwo;
      break;
    }
    case 'X': /* multiply */
    {
      total = numberOne * numberTwo;
      break;
    }
    case '-': /* subtract */
    {
      total = numberOne - numberTwo;
      break;
    }
    case '+': /* add */
    {
      total = numberOne + numberTwo;
      break;
    }
    default:
      break;
  }
  return total;
}

export default operate;
