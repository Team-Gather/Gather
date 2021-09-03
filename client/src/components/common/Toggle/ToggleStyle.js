import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 300px;
  background: #dde1e7;
  border-radius: 5px;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
  margin-right: 40px;
`;

export const ToggleBox = styled.div`
  height: 40px;
  width: 100px;

  & > input {
    position: relative;
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: ${({ onToggle }) => (onToggle ? 'lightblue' : '#dde1e7')};
    outline: none;
    -webkit-appearance: none;
    border-radius: 25px;
    box-shadow: -8px -4px 8px 0px #ffffff73, 8px 4px 12px 0px rgba(94, 104, 121, 0.288),
      inset -4px -4px 4px 0px #ffffff73, inset 4px 4px 4px 0px rgba(94, 104, 121, 0.288);
  }

  & > input:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: #dde1e7;
    transition: left 0.2s ease;

    border-radius: 50%;
    box-shadow: -8px -4px 8px 0px #ffffff73, 8px 4px 12px 0px rgba(94, 104, 121, 0.288);
  }

  & > input:checked:before {
    left: 60px;
    box-shadow: -8px -4px 8px 0px #ffffff73;
  }
`;

export const ToggleText = styled.div`
  margin-left: 20px;
  font-size: 20px;
  letter-spacing: 0.2px;
`;
