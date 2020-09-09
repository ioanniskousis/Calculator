import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="ButtonPanel">
      <div className="ButtonGroup">
        <Button
          name="AC"
          color
        />
        <Button
          name={'\u00B1'}
          color
        />
        <Button
          name={'\u0025'}
          color
        />
        <Button
          name={'\u00F7'}
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="7"
          color
        />
        <Button
          name="8"
          color
        />
        <Button
          name="9"
          color
        />
        <Button
          name="X"
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="4"
          color
        />
        <Button
          name="5"
          color
        />
        <Button
          name="6"
          color
        />
        <Button
          name="-"
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="1"
          color
        />
        <Button
          name="2"
          color
        />
        <Button
          name="3"
          color
        />
        <Button
          name="+"
        />
      </div>

      <div className="ButtonGroup">
        <Button
          name="0"
          color
          wide
        />
        <Button
          name="."
          color
        />
        <Button
          name="="
        />
      </div>

    </div>
  );
}

export default ButtonPanel;
