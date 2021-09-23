import styled from 'styled-components';
import { color, shadow, transition } from 'styles/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
  color: ${color.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 600px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background: ${color.background};
  box-shadow: 6px 6px 12px #ceced1, -4px -2px 12px #ffffff;

  @media screen and (max-width: 600px) {
    box-shadow: none;
    padding: 10px 20px;
  }

  & > form {
    width: 80%;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
export const Field = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;
  margin-top: 20px;

  & > input {
    height: 100%;
    width: 100%;
    padding-left: 45px;
    font-size: 16px;
    color: ${color.black};
    background: ${color.background};
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
  }
  & > input:focus {
    color: ${color.primary};
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73;
  }

  & > input:valid ~ label {
    opacity: 0;
  }

  & > span {
    position: absolute;
    width: 50px;
    line-height: 50px;
    color: ${color.black};
  }
`;

export const Button = styled.button`
  margin: 15px 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  background: ${({ signUpSuccess }) => (signUpSuccess ? color.primary : color.background)};
  cursor: pointer;
  border-radius: 25px;
  box-shadow: ${({ signUpSuccess }) => (signUpSuccess ? shadow.primary : shadow.pressed)};
  color: ${({ signUpSuccess }) => (signUpSuccess ? color.white : color.lightgray)};
  transition: ${transition.primary};

  @media screen and (max-width: 600px) {
    margin: 2rem 0;
  }

  &:hover {
    box-shadow: 2px 2px 4px #babecc, -3px -3px 6px #ffffff73;
  }
`;

export const GoLogin = styled.div`
  font-size: 16px;

  color: ${color.black};
  margin: 10px 0;

  & > a {
    font-weight: 600;
    color: #2d4cc8;
    margin-left: 10px;
  }

  &:hover a {
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #e01e5a;
  font-size: 14px;
  font-weight: 500;
  margin: 8px 8px 16px 8px;
`;

export const SocialIcons = styled.div`
  margin: 15px 0 25px 0;
  & > a {
    text-decoration: none;
    color: inherit;
    position: relative;
    height: 50px;
    width: 50px;
    display: inline-flex;
    margin: 0 2rem;
    border-radius: 50%;

    background: ${color.background};
    border-radius: 50%;
    box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;

    @media screen and (max-width: 600px) {
      height: 50px;
      width: 50px;

      margin: 0 1rem;
    }
  }

  & > a:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: ${color.background};
    border-radius: 50%;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > a > span {
    position: relative;
    font-size: 20px;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 55px;
    z-index: 5;
  }

  & > a > .instagram {
    color: #e1306c;
  }

  & > a > .linkedin {
    color: #4267b2;
  }
`;
