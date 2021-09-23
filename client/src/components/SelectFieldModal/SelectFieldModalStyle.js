import styled from 'styled-components';
import { color, shadow } from 'styles/Theme';

export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 1.46666667;
    font-weight: 700;
  }

  & > div {
    text-align: left;
    padding-bottom: 1rem;
  }
`;

export const CheckboxContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Checkbox = styled.li`
  position: relative;
  display: inline-flex;
  min-height: 2.5rem;
  padding: 0.625rem;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 4;

  color: ${({ isChecked }) => (isChecked ? color.white : '')};
  background: ${({ isChecked }) => (isChecked ? color.primary : color.background)};
  box-shadow: ${({ isChecked }) => (isChecked ? shadow.hover : shadow.primary)};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
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
  box-shadow: ${shadow.primary};

  &:first-child {
    color: #f5222d;
    margin-right: 0.5rem;
  }

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
    box-shadow: ${shadow.pressed};
  }

  & > span > svg {
    vertical-align: unset;
  }
`;
