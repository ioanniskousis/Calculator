function calculate(calculator, buttonName) {
  let { total } = calculator;
  let { next } = calculator;
  const { operation } = calculator;

  switch (buttonName) {
    case 'AC':
    {
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
      total *= next / 100.0;
      break;
    }
    case '\u00F7': /* divideButton */
    {
      total /= next;
      break;
    }
    case 'X': /* multiplyButton */
    {
      total *= next;
      break;
    }
    case '-': /* subtractButton */
    {
      total -= next;
      break;
    }
    case '+': /* addButton */
    {
      total += next;
      break;
    }
    case '=': /* equalButton */
    {
      break;
    }
    case /^ButtonFor/: /* ButtonFor Number */
    {
      break;
    }
    default:
      break;
  }

  return {
    total,
    next,
    operation,
  };
}

export default calculate;
