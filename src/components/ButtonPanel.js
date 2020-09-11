import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function handleClick(buttonName) {
  // const result = calculate(this.state, buttonName);
  // this.setState(result);
}
function button(symbol, classname, clickHandler) {
  return (
    <Button
      name={symbol}
      classname={classname}
      clickHandler={clickHandler}
    />
  );
}

function buttonGroup(rowSymbols, rowColors, rowWidths, clickHandler) {
  let buttons = '';
  for (let i = 0; i < rowSymbols.length; i += 1) {
    const classname = (rowWidths[i] ? 'Button Button2' : 'Button')
      .concat(rowColors[i] ? ' Button3' : '');
    buttons = buttons.concat(button(rowSymbols[i], classname, clickHandler));
  }
  return (
    <div className="ButtonGroup">
      {buttons}
    </div>
  );
}

function ButtonPanel(props) {
  const { clickHandler } = props;
  const symbols = [
    ['AC', '\u00B1', '\u0025', '\u00F7'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const colors = [
    [null, null, null, true],
    [null, null, null, true],
    [null, null, null, true],
    [null, null, null, true],
    [null, null, true],
  ];
  const dblWidths = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [true, null, null],
  ];
  // let buttonGroups = '';
  for (let row = 0; row < 5; row += 1) {
    // const btn = (
    //   {buttonGroup(symbols[row], colors[row], dblWidths[row], clickHandler)}
    // );
    // buttonGroups = buttonGroups
    //   .concat(buttonGroup(symbols[row], colors[row], dblWidths[row], clickHandler));
  }

  return (
    <div className="ButtonPanel">
      {/* <Button
        name="AC"
        classname="Button Button3"
        clickHandler={clickHandler}
      /> */}
      {/* {buttonGroup(symbols[0], colors[0], dblWidths[0], clickHandler)} */}

      <div className="ButtonGroup">
        <Button
          name="AC"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="-/+"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="%"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="/"
          clickHandler={clickHandler}
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="7"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="8"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="9"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="X"
          clickHandler={clickHandler}
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="4"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="5"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="6"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="-"
          clickHandler={clickHandler}
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="1"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="2"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="3"
          color
          clickHandler={clickHandler}
        />
        <Button
          name="+"
          clickHandler={clickHandler}
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="0"
          color
          wide
          clickHandler={clickHandler}
        />
        <Button
          name="."
          color
          clickHandler={clickHandler}
        />
        <Button
          name="="
          clickHandler={clickHandler}
        />
      </div>

    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
