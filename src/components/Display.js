import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { output } = props;
  const { total } = props;
  const { operation } = props;
  // alert(total);
  return (
    <div className="Display">
      {output}
      <div className="displayTotal">
        {total ? total.toString().concat(' ').concat(operation || '') : ''}
      </div>
    </div>
  );
}

Display.propTypes = {
  output: PropTypes.string,
  total: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  output: '0',
  total: '0',
  operation: '',
};

export default Display;
