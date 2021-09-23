import styled, { css } from 'styled-components';
import { border, color, shadow, transition } from 'styles/Theme';

export const Container = styled.div`
  min-height: 650px;
  margin-top: 5px;
  padding: 1.2rem 18rem;

  @media screen and (max-width: 600px) {
    padding: 1rem 0.4rem;
  }

  & > input {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    font-weight: 600;

    color: ${color.black_02};
    background: ${color.background};
    border-radius: 25px;
    box-shadow: ${shadow.pressed};

    &::placeholder {
      font-family: 'Poppins', sans-serif;
    }

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

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
  color: ${color.primaryNoLinear};
  border: ${border.primary};

  box-shadow: ${shadow.primary};

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
  color: ${({ isClicked }) => (isClicked ? color.primaryNoLinear : color.black_03)};
  z-index: 4;
  margin-right: 0.5rem;
  border-radius: 10px;

  border: ${({ isFieldsSelected }) => (isFieldsSelected ? 'none' : border.primary)};
  background: ${({ isFieldsSelected }) => (isFieldsSelected ? color.primary : color.background)};
  box-shadow: ${({ isClicked }) => (isClicked ? shadow.pressed : shadow.primary)};

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
        background: ${color.background};
        box-shadow: ${shadow.pressed};
      `}
  }

  & > span > svg {
    vertical-align: unset;
    color: ${({ isFieldsSelected }) => (isFieldsSelected ? color.white : '')};
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 3.5rem;

  @media screen and (max-width: 600px) {
    margin-top: 5.5rem;
  }

  & > button {
    position: relative;
    width: 80px;
    padding: 12px 0;
    font-size: 17px;
    font-weight: 400;
    border-radius: 5px;
    cursor: pointer;
    color: ${color.black_03};
    margin-bottom: 2rem;
    z-index: 4;
    margin-right: 0.5rem;
    border-radius: 10px;

    transition: ${transition.primary};
    box-shadow: ${shadow.primary};

    & > span > svg {
      vertical-align: unset;
    }
  }

  & > .cancel:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: ${color.background};
    border-radius: 10px;
    z-index: -1;
    box-shadow: ${shadow.pressed};
  }

  & > .submit_post {
    background: ${color.primary};
    color: ${color.white};
  }

  & > .submit_post:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    z-index: -1;

    box-shadow: ${shadow.hover};
  }
`;
