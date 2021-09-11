import { Container } from 'pages/Login/LoginStyle';
import React from 'react';
import { CheckBox, Radio } from './CheckboxStyle';

const Checkbox = () => {
  return (
    <Container>
      <Radio type="radio" name="a" />
      <Radio type="radio" name="a" />
      <Radio type="radio" name="a" />

      <br />

      <CheckBox type="checkbox" name="b" checked />
      <CheckBox type="checkbox" name="b" />
      <CheckBox type="checkbox" name="b" />
    </Container>
  );
};

export default Checkbox;
