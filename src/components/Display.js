import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { output, total, operation } = props;
  return (
    <div className="display">
      {output}
      <div className="displayTotal">
        {total ? total.toString().concat(' ').concat(operation || '') : ''}
      </div>
    </div>
  );
};

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
