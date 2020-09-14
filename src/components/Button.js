/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

function handleClick(buttonName, clickHandler) {
  clickHandler(buttonName);
}

function Button(props) {
  const { clickHandler } = props;
  const { name } = props;
  const { wide } = props;
  const { color } = props;
  const classname = (wide ? 'Button Button2' : 'Button')
    .concat(color ? ' Button3' : '');
  return (
    <div
      className={classname}
      id={name}
      onClick={() => handleClick(name, clickHandler)}
    >
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: false,
  clickHandler: null,
};

export default Button;
