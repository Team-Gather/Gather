import styled, { css } from 'styled-components';

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

    color: #44476a;
    background: #ecf0f3;
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.shadow.pressed};

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
    color: #31344b;
    margin-bottom: 2rem;
    z-index: 4;
    margin-right: 0.5rem;
    border-radius: 10px;

    transition: ${({ theme }) => theme.transition.primary};
    box-shadow: ${({ theme }) => theme.shadow.primary};

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

    background: #ecf0f3;
    border-radius: 10px;
    z-index: -1;
    box-shadow: inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #ffffff;
  }

  & > .submit_post {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
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

    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;

export const quillStyle = {
  height: '600px',
  marginTop: '10px',
};
