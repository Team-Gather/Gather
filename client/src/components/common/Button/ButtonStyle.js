import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ButtonBox = styled.button`
  position: relative;
  width: 80px;
  padding: 12px 0;
  font-size: 17px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  color: #31344b;
  margin-bottom: 2rem;
  z-index: 4;

  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;

  &:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #ecf0f3;
    border-radius: 5px;
    z-index: -1;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > span > svg {
    vertical-align: unset;
  }
`;
