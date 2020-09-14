import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  const groupsInfo = [
    [
      { name: 'AC', wide: null, color: true },
      { name: '-/+', wide: null, color: true },
      { name: '%', wide: null, color: true },
      { name: '/', wide: null, color: null },
    ],
    [
      { name: '7', wide: null, color: true },
      { name: '8', wide: null, color: true },
      { name: '9', wide: null, color: true },
      { name: 'X', wide: null, color: null },
    ],
    [
      { name: '4', wide: null, color: true },
      { name: '5', wide: null, color: true },
      { name: '6', wide: null, color: true },
      { name: '-', wide: null, color: null },
    ],
    [
      { name: '1', wide: null, color: true },
      { name: '2', wide: null, color: true },
      { name: '3', wide: null, color: true },
      { name: '+', wide: null, color: null },
    ],
    [
      { name: '0', wide: true, color: true },
      { name: '.', wide: null, color: true },
      { name: '=', wide: null, color: null },
    ],
  ];

  const buttonGroups = [];
  // eslint-disable-next-line array-callback-return
  groupsInfo.map(group => {
    const buttons = [];
    group.forEach(button => {
      buttons.push(
        <Button
          name={button.name}
          wide={button.wide}
          color={button.color}
          clickHandler={clickHandler}
        />,
      );
    });

    buttonGroups.push(
      <div className="ButtonGroup">
        {buttons}
      </div>,
    );
  });
  return (
    <div className="ButtonPanel">
      {buttonGroups}
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
