import React, { useState } from 'react';
import { DropdownContainer, DropdownText, Options } from './DropdownStyle';
import { DownOutlined } from '@ant-design/icons';

const Dropdown = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const onHandleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <DropdownContainer onClick={onHandleDropdown}>
      <DropdownText isDropdown={isDropdown}>
        <div className="field">Field</div>
        <div className="arrow">
          <DownOutlined />
        </div>
      </DropdownText>
      {isDropdown && (
        <Options>
          <li>Web</li>
          <li>App</li>
          <li>Game</li>
          <li>Machinary</li>
          <li>Security</li>
        </Options>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
