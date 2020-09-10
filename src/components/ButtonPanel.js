import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="ButtonPanel">

      <div className="ButtonGroup">
        <Button
          name="acButton"
          sign="AC"
        />
        <Button
          name="plusMinusButton"
          sign={'\u00B1'}
        />
        <Button
          name="percentButton"
          sign={'\u0025'}
        />
        <Button
          name="divideButton"
          sign={'\u00F7'}
          orange
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="ButtonFor7"
          sign="7"
        />
        <Button
          name="ButtonFor8"
          sign="8"
        />
        <Button
          name="ButtonFor9"
          sign="9"
        />
        <Button
          name="multiplyButton"
          sign="X"
          orange
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="ButtonFor4"
          sign="4"
        />
        <Button
          name="ButtonFor5"
          sign="5"
        />
        <Button
          name="ButtonFor6"
          sign="6"
        />
        <Button
          name="subtractButton"
          sign="-"
          orange
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="ButtonFor1"
          sign="1"
        />
        <Button
          name="ButtonFor2"
          sign="2"
        />
        <Button
          name="ButtonFor3"
          sign="3"
        />
        <Button
          name="addButton"
          sign="+"
          orange
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="ButtonFor0"
          sign="0"
          dblwidth
        />
        <Button
          name="dotButton"
          sign="."
        />
        <Button
          name="equalButton"
          sign="="
          orange
        />
      </div>

    </div>
  );
}

export default ButtonPanel;
