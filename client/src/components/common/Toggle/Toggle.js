import React, { useState } from 'react';
import { ToggleContainer, ToggleBox, ToggleText } from './ToggleStyle';

const Toggle = ({ title }) => {
  const [onToggle, setOnToggle] = useState(false);

  const onHandleToggle = () => {
    setOnToggle((prev) => !prev);
  };

  return (
    <ToggleContainer>
      <ToggleBox onToggle={onToggle} onClick={onHandleToggle}>
        <input type="checkbox" />
      </ToggleBox>
      <ToggleText>{title}</ToggleText>
    </ToggleContainer>
  );
};

export default Toggle;
