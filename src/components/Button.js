import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const { wide } = props;
  const { color } = props;
  const classname = (wide ? 'Button Button2' : 'Button')
    .concat(color ? ' Button3' : '');
  return (
    <div className={classname} id={name}>
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: false,
};

export default Button;
