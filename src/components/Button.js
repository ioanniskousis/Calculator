/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  clickHandler,
  name,
  wide,
  color,
}) => {
  const classname = (wide ? 'button wide-button' : 'button')
    .concat(color ? ' gray-button' : '');
  return (
    <div
      className={classname}
      id={name}
      onClick={clickHandler}
    >
      {name}
    </div>
  );
};

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
