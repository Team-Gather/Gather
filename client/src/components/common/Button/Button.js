import React from 'react';
import { ButtonBox, ButtonWrapper } from './ButtonStyle';

const Button = () => {
  return (
    <ButtonWrapper>
      <ButtonBox className="button1">Button1</ButtonBox>
      <ButtonBox className="button2">Button2</ButtonBox>
    </ButtonWrapper>
  );
};

export default Button;
