import React from 'react';
import { FieldWrapper } from './FieldStyle';

const Field = ({ type, icon, onChangeFunc, placeholder }) => {
  return (
    <FieldWrapper>
      {icon}
      <input type={type} onChange={onChangeFunc} placeholder={placeholder} />
    </FieldWrapper>
  );
};

export default Field;
