import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name,
    sign,
    dblwidth,
    orange,
  } = props;
  const classname = (dblwidth ? 'Button Button2' : 'Button')
    .concat(orange ? ' Button3' : '');
  return (
    <div className={classname} id={name}>
      {sign}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  sign: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  sign: '',
  wide: false,
  color: false,
};

export default Button;
