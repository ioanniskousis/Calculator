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
    const { dblwidth } = this.props;
    const { orange } = this.props;
    const classname = (dblwidth ? 'Button Button2' : 'Button')
      .concat(orange ? ' Button3' : '');
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
  dblwidth: PropTypes.bool,
  orange: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  sign: '',
  dblwidth: false,
  orange: false,
};

export default Button;
