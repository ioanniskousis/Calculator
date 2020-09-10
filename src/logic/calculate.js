import operate from './operate';

function calculate(calculator, buttonName) {
  let { total } = calculator;
  let { next } = calculator;
  let { operation } = calculator;

  switch (buttonName) {
    case 'AC':
    {
      total = 0;
      break;
    }
    case '\u00B1': /* plusMinusButton */
    {
      total *= -1;
      next *= -1;
      break;
    }
    case '\u0025': /* percentButton */
    {
      operation = '%';
      break;
    }
    case '\u00F7': /* divideButton */
    {
      operation = '/';
      break;
    }
    case 'X': /* multiplyButton */
    {
      operation = 'X';
      break;
    }
    case '-': /* subtractButton */
    {
      operation = '-';
      break;
    }
    case '+': /* addButton */
    {
      operation = '+';
      break;
    }
    case '=': /* equalButton */
    {
      break;
    }
    case /^ButtonFor/: /* ButtonFor Number */
    {
      next = parseInt(buttonName.substring(buttonName.length - 1), 10);
      break;
    }
    default:
      break;
  }

  if (operation in ['%', '/', '*', '-', '+']) {
    total = operate(total, next, operation);
  }

  return {
    total,
    next,
    operation,
  };
}

export default calculate;
