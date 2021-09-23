import styled from 'styled-components';
import { color } from 'styles/Theme';

export const FieldWrapper = styled.div`
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
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
  }
  & > input:focus {
    color: #2d4cc8;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73;
  }

  & > input:valid ~ label {
    opacity: 0;
  }

  &:nth-child(n) {
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
    color: ${color.black};
  }
`;
