import React, { useEffect, useState } from 'react';
import {
  Container,
  Wrapper,
  Field,
  Title,
  ForgotPassword,
  Button,
  GoSignUp,
  Error,
  SocialIcons,
} from './LoginStyle';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ROUTES } from 'utils/routes';
import { Link } from 'react-router-dom';
import { emailValidator } from 'utils/validation';
import {
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailInvalidText, setEmailInvalidText] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(null);
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validateEmail = (value) => {
    if (!emailValidator.format.validator(value)) {
      setEmailInvalidText(emailValidator.format.invalidText);
      setIsEmailInvalid(true);
      return;
    }
    setIsEmailInvalid(false);
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    validateEmail(value);
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (email && password && !isEmailInvalid) setLoginSuccess(true);
    else setLoginSuccess(false);
  }, [email, password, isEmailInvalid]);

  return (
    <Container>
      <Wrapper>
        <Title>Gather</Title>
        <SocialIcons>
          <Link>
            <GoogleOutlined className="google" />
          </Link>
          <Link>
            <InstagramOutlined className="instagram" />
          </Link>
          <Link>
            <LinkedinOutlined className="linkedin" />
          </Link>
          <Link>
            <GithubOutlined className="github" />
          </Link>
        </SocialIcons>
        <form onSubmit={onHandleSubmit}>
          <Field>
            <UserOutlined />
            <input type="text" onChange={onChangeEmail} placeholder="Email" />
            <label>Email</label>
          </Field>
          {!email && <Error>Please input your email</Error>}
          {email && isEmailInvalid && <Error>{emailInvalidText}</Error>}
          <Field>
            <LockOutlined />
            <input type="password" onChange={onChangePassword} placeholder="Password" />
            <label>Password</label>
          </Field>
          {!password && <Error>Please input your password</Error>}
          <ForgotPassword>
            <Link to={ROUTES.SIGNUP}>Forgot Password?</Link>
          </ForgotPassword>
          <Button type="submit" disabled={!loginSuccess} loginSuccess={loginSuccess}>
            Sign in
          </Button>
          <GoSignUp>
            Not a member?
            <Link to={ROUTES.SIGNUP}>Sign up now!</Link>
          </GoSignUp>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
