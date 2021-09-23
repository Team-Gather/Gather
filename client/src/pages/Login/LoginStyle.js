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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 430px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background: ${color.background};
  box-shadow: ${shadow.large};

  @media screen and (max-width: 600px) {
    box-shadow: none;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${color.black_01};
`;

export const ImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;
  margin: 0 5px;
  background: ${color.background};
  border-radius: 50%;
  // box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const InnerArea = styled.div`
  height: calc(100% - 10px);
  width: calc(100% - 10px);

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Field = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;

  & > input {
    height: 100%;
    width: 100%;
    padding-left: 45px;
    font-size: 16px;
    color: ${color.black};
    background: ${color.background};
    border-radius: 25px;
    box-shadow: ${shadow.input};
  }
  & > input:focus {
    color: ${color.primaryNoLinear};
    box-shadow: ${shadow.input_focus};
  }

  & > input:valid ~ label {
    opacity: 0;
  }

  &:nth-child(2) {
    margin-top: 20px;
  }

  & > label {
    position: absolute;
    top: 50%;
    left: 45px;
    pointer-events: none;
    color: ${color.primaryNoLinear};
    transform: translateY(-50%);
  }

  & > span {
    position: absolute;
    width: 50px;
    line-height: 50px;
    color: ${color.black_01};
  }
`;

export const ForgotPassword = styled.div`
  text-align: left;
  margin: 10px 0 10px 5px;

  & > a {
    font-size: 15px;
    color: ${color.primaryNoLinear};
  }

  &:hover a {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  margin: 15px 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 25px;

  transition: ${transition.primary};
  background: ${color.primary};
  box-shadow: ${shadow.primary};
  color: ${color.white};

  &:hover {
    box-shadow: ${shadow.hover};
  }
`;

export const GoSignUp = styled.div`
  font-size: 16px;
  color: #595959;
  margin: 10px 0;

  & > a {
    color: ${color.primaryNoLinear};
    margin-left: 10px;
  }

  &:hover a {
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${color.error};
  font-size: 14px;
  font-weight: 500;
  margin: 8px 8px 16px 8px;
`;

export const SocialIcons = styled.div`
  margin: 5px 0;
  & > a {
    text-decoration: none;
    color: inherit;
    position: relative;
    height: 50px;
    width: 50px;
    display: inline-flex;
    margin: 0.5rem;
    border-radius: 50%;

    background: ${color.background};
    border-radius: 50%;
    box-shadow: ${shadow.icon};

    @media screen and (max-width: 600px) {
      margin: 0 0.5rem;
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
    box-shadow: ${shadow.icon_hover};
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
    color: ${color.instagram};
  }

  & > a > .linkedin {
    color: ${color.linkedin};
  }
`;
