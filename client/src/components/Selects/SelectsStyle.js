import styled, { css } from 'styled-components';
import { MinusOutlined, CheckCircleOutlined } from '@ant-design/icons';

export const SelectWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  & > .css-2b097c-container {
    width: 85%;
  }
`;

export const Fields = styled.div`
  display: flex;
  padding: ${({ isSelected }) => (isSelected ? '6px 12px' : '0')};
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 0.5rem;
  color: #2d4cc8;
  border: 1px solid #d1d9e6;

  box-shadow: ${({ theme }) => theme.shadow.primary};

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  position: relative;

  padding: 0 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ isClicked }) => (isClicked ? '#2D4CC8' : '#31344b')};
  z-index: 4;
  margin-right: 0.5rem;
  border-radius: 10px;

  border: ${({ isFieldsSelected, theme }) => (isFieldsSelected ? 'none' : theme.border.primary)};
  background: ${({ theme, isFieldsSelected }) =>
    isFieldsSelected ? theme.color.primary : theme.color.background};
  box-shadow: ${({ isClicked }) =>
    isClicked
      ? 'inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #ffffff'
      : '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff'};

  &:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 5px;
    z-index: -1;

    ${({ isFieldsSelected }) =>
      !isFieldsSelected &&
      css`
        background: #ecf0f3;
        box-shadow: inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #ffffff;
      `}
  }

  & > span > svg {
    vertical-align: unset;
    color: ${({ isFieldsSelected, theme }) => (isFieldsSelected ? theme.color.white : '')};
  }
`;

export const CustomedCheckCircleOutlined = styled(CheckCircleOutlined)`
  margin-right: 0.5rem;
`;

export const CustomedMinusOutlined = styled(MinusOutlined)`
  transform: rotate(90deg);
  padding: 0 0.4rem;
  opacity: 0.2;
`;
