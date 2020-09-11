import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  return (
    <div className="ButtonPanel">
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
