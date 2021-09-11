import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;

  background: #ecf0f3;
  border-radius: 5px;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);

  min-height: 2.5rem;
  padding: 0.625rem;
  border-radius: 0.25rem;
`;

export const ToggleBox = styled.div`
  height: 20px;
  width: 40px;

  & > input {
    position: relative;
    cursor: pointer;
    height: 100%;
    width: 100%;
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
    width: 20px;
    height: 20px;
    background: #dde1e7;
    transition: left 0.2s ease;

    border-radius: 50%;
    box-shadow: -8px -4px 8px 0px #ffffff73, 8px 4px 12px 0px rgba(94, 104, 121, 0.288);
  }

  & > input:checked:before {
    left: 20px;
    box-shadow: -8px -4px 8px 0px #ffffff73;
  }
`;

export const ToggleText = styled.div`
  letter-spacing: 0.2px;
`;
