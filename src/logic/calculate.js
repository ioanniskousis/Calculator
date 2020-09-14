import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;
  let equal = false;

  switch (buttonName) {
    case 'AC':
    {
      total = '0';
      next = '0';
      operation = null;
      break;
    }
    case '-/+':
    {
      total = (parseFloat(total) * (-1)).toString();
      next = (parseFloat(next) * (-1)).toString();
      break;
    }
    case '%':
    {
      next = operate(parseFloat(total), parseFloat(next), buttonName).toString();
      break;
    }
    case '/':
    case 'X':
    case '-':
    case '+':
    {
      if (operation === '=') {
        next = 0;
      } else if ('%/X-+'.includes(operation)) {
        total = operate(parseFloat(total), parseFloat(next), operation).toString();
        next = '0';
      } else {
        total = next;
        next = '0';
      }
      operation = buttonName;
      break;
    }
    case '=':
    {
      equal = true;
      break;
    }
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    {
      if (operation === '=') {
        operation = null;
        next = null;
        total = '0';
      }

      if (next) {
        next = (next === '0') ? buttonName : next.concat(buttonName);
      } else {
        next = buttonName;
      }
      break;
    }
    case '.':
    {
      if (!next || !next.toString().includes(buttonName)) {
        if (operation === '=') {
          operation = null;
          next = '0';
          total = '0';
        }

        if (next) {
          next = (next || '0').concat(buttonName);
        } else {
          next = '0'.concat(buttonName);
        }
      }
      break;
    }
    default:
      break;
  }

  if (equal) {
    if ('%/X-+'.includes(operation)) {
      total = operate(parseFloat(total), parseFloat(next), operation);
      operation = '=';
      next = total;
    }
  }

  return {
    total,
    next,
    operation,
  };
}

export default calculate;
