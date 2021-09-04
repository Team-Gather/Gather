import React, { useState } from 'react';
import { ToggleContainer, ToggleBox, ToggleText } from './ToggleStyle';

const Toggle = () => {
  const [onToggle, setOnToggle] = useState(false);

  const onHandleToggle = () => {
    setOnToggle((prev) => !prev);
  };

  return (
    <ToggleContainer>
      <ToggleBox onToggle={onToggle} onClick={onHandleToggle}>
        <input type="checkbox" />
      </ToggleBox>
      <ToggleText onToggle={onToggle}>{onToggle ? 'Checked' : 'Unchecked'}</ToggleText>
    </ToggleContainer>
  );
};

export default Toggle;
