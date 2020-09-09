import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    const { sign } = this.props;
    const { wide } = this.props;
    const { color } = this.props;
    const classname = (wide ? 'Button Button2' : 'Button')
      .concat(color ? ' Button3' : '');
    return (
      <div className={classname} id={name}>
        {sign}
      </div>
    );
  }
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
