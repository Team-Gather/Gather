import React, { useEffect, useState } from 'react';
import { Container, Wrapper, GoLogin, Button, Title, Error, SocialIcons } from './SignUpStyle';
import Field from 'components/common/Field/Field';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { emailValidator, nameValidator, passwordValidator } from 'utils/validation';
import { inValidPasswordText } from 'utils/constants';
import {
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const SignUp = () => {
  const [name, setName] = useState('');
  const [nameInvalidText, setNameInvalidText] = useState('');
  const [isNameInvalid, setIsNameInvalid] = useState(null);

  const [email, setEmail] = useState('');
  const [emailInvalidText, setEmailInvalidText] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(null);

  const [password, setPassword] = useState('');
  const [isPwRequired, setIsPwRequired] = useState(null);
  const [isPwLengthInValid, setIsPwLengthInValid] = useState(null);
  const [isPwCharInValid, setIsPwCharInValid] = useState(null);
  const [isPwEngInValid, setIsPwEngInValid] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState('');

  const [mismatchError, setMismatchError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const validateName = (value) => {
    if (!nameValidator.required.validator(value)) {
      setNameInvalidText(nameValidator.required.invalidText);
      setIsNameInvalid(true);
      return;
    }

    setIsNameInvalid(false);
  };

  const onChangeName = (e) => {
    const value = e.target.value;
    validateName(value);
    setName(value);
  };

  const validateEmail = (value) => {
    if (!emailValidator.required.validator(value)) {
      setEmailInvalidText(emailValidator.required.invalidText);
      setIsEmailInvalid(true);
      return;
    }

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

  const validatePassword = (value) => {
    if (!passwordValidator.required.validator(value)) {
      setIsPwRequired(true);
    } else setIsPwRequired(false);

    if (!passwordValidator.length.validator(value)) {
      setIsPwLengthInValid(true);
    } else setIsPwLengthInValid(false);

    if (!passwordValidator.capital.validator(value)) {
      setIsPwEngInValid(true);
    } else setIsPwEngInValid(false);

    if (!passwordValidator.numberAndSpecialChar.validator(value)) {
      setIsPwCharInValid(true);
    } else setIsPwCharInValid(false);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    validatePassword(value);
    setPassword(value);
    setMismatchError(value !== passwordCheck);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  const onChangePasswordCheck = (e) => {
    const value = e.target.value;
    setPasswordCheck(value);
    setMismatchError(e.target.value !== password);
  };

  useEffect(() => {
    if (
      !isNameInvalid &&
      !isEmailInvalid &&
      !isPwRequired &&
      !isPwLengthInValid &&
      !isPwCharInValid &&
      !isPwEngInValid &&
      !mismatchError
    ) {
      setSignUpSuccess(true);
    } else setSignUpSuccess(false);
  }, [
    isNameInvalid,
    isEmailInvalid,
    isPwRequired,
    isPwLengthInValid,
    isPwCharInValid,
    isPwEngInValid,
    mismatchError,
  ]);

  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
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
          <Field
            type="text"
            icon={<UserOutlined />}
            onChangeFunc={onChangeName}
            placeholder="Name"
          />
          {isNameInvalid && <Error>{nameInvalidText}</Error>}

          <Field
            type="email"
            icon={<UserOutlined />}
            onChangeFunc={onChangeEmail}
            placeholder="Email"
          />
          {isEmailInvalid && <Error>{emailInvalidText}</Error>}

          <Field
            type="password"
            icon={<LockOutlined />}
            onChangeFunc={onChangePassword}
            placeholder="Password"
          />
          {isPwRequired && <Error>Please input your password</Error>}
          {password && (
            <div>
              {isPwLengthInValid && <Error>{inValidPasswordText.length}</Error>}
              {isPwEngInValid && <Error>{inValidPasswordText.engNum}</Error>}
              {isPwCharInValid && <Error>{inValidPasswordText.char}</Error>}
            </div>
          )}

          <Field
            type="password"
            icon={<LockOutlined />}
            onChangeFunc={onChangePasswordCheck}
            placeholder="Re-enter password"
          />
          {mismatchError && <Error>{inValidPasswordText.misMatch}</Error>}

          <Button type="submit" disabled={!signUpSuccess} signUpSuccess={signUpSuccess}>
            Sign Up
          </Button>

          <GoLogin>
            Already have an account?
            <Link to={ROUTES.LOGIN}>Login</Link>
          </GoLogin>
        </form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
