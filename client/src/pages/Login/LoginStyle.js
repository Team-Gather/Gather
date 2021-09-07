import styled from 'styled-components';

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
  background: #ecf0f3;
  box-shadow: 6px 6px 12px #ceced1, -4px -2px 12px #ffffff;

  @media screen and (max-width: 600px) {
    box-shadow: none;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #595959;
`;

export const ImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;
  margin: 0 5px;
  background: #ecf0f3;
  border-radius: 50%;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
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
    color: #595959;
    background: #ecf0f3;
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
  }
  & > input:focus {
    color: #2d4cc8;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73;
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
    color: #666666;
    transform: translateY(-50%);
  }

  & > span {
    position: absolute;
    width: 50px;
    line-height: 50px;
    color: #595959;
  }
`;

export const ForgotPassword = styled.div`
  text-align: left;
  margin: 10px 0 10px 5px;

  & > a {
    font-size: 15px;
    color: #2d4cc8;
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
  background: #ecf0f3;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: ${({ loginSuccess }) =>
    loginSuccess
      ? '2px 2px 5px #babecc, -5px -5px 10px #ffffff73;'
      : ' inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73'};
  color: ${({ loginSuccess }) => (loginSuccess ? '#595959' : 'lightgray')};

  &:hover {
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
  }
`;

export const GoSignUp = styled.div`
  font-size: 16px;
  color: #595959;
  margin: 10px 0;

  & > a {
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
  margin: 5px 0 25px 0;
  & > a {
    text-decoration: none;
    color: inherit;
    position: relative;
    height: 50px;
    width: 50px;
    display: inline-flex;
    margin: 0.5rem;
    border-radius: 50%;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;

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

    background: #ecf0f3;
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
