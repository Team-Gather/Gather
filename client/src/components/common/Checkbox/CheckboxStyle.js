import styled from 'styled-components';

export const Radio = styled.input`
  -webkit-appearance: none;
  width: 50px;
  height: 50px;
  margin: 30px;
  background-color: #eeeeee;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 1);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease;

  &:checked {
    background-color: #686de0;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2), inset -5px -5px 10px rgba(255, 255, 255, 0.2);
  }
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  width: 50px;
  height: 50px;
  margin: 30px;
  background-color: #eeeeee;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 1);
  border-radius: 50%;
  border: 8px solid #ececec;

  outline: none;
  cursor: pointer;
  transition: all 0.1s ease;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  &::after {
    content: '\f011';
  }
`;
