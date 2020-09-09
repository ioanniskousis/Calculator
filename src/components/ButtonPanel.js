import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ButtonPanel">

        <div className="ButtonGroup">
          <Button
            name="acButton"
            sign="AC"
            color
          />
          <Button
            name="plusMinusButton"
            sign={'\u00B1'}
            color
          />
          <Button
            name="percentButton"
            sign={'\u0025'}
            color
          />
          <Button
            name="divideButton"
            sign={'\u00F7'}
          />
        </div>

        <div className="ButtonGroup">
          <Button
            name="ButtonFor7"
            sign="7"
            color
          />
          <Button
            name="ButtonFor8"
            sign="8"
            color
          />
          <Button
            name="ButtonFor9"
            sign="9"
            color
          />
          <Button
            name="multiplyButton"
            sign="X"
          />
        </div>

        <div className="ButtonGroup">
          <Button
            name="ButtonFor4"
            sign="4"
            color
          />
          <Button
            name="ButtonFor5"
            sign="5"
            color
          />
          <Button
            name="ButtonFor6"
            sign="6"
            color
          />
          <Button
            name="subtractButton"
            sign="-"
          />
        </div>

        <div className="ButtonGroup">
          <Button
            name="ButtonFor1"
            sign="1"
            color
          />
          <Button
            name="ButtonFor2"
            sign="2"
            color
          />
          <Button
            name="ButtonFor3"
            sign="3"
            color
          />
          <Button
            name="addButton"
            sign="+"
          />
        </div>

        <div className="ButtonGroup">
          <Button
            name="ButtonFor0"
            sign="0"
            color
            wide
          />
          <Button
            name="dotButton"
            sign="."
            color
          />
          <Button
            name="equalButton"
            sign="="
          />
        </div>

      </div>
    );
  }
}

export default ButtonPanel;
