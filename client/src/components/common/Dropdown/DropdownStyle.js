import styled from 'styled-components';

export const DropdownContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  width: 200px;
  height: 70px;
  background: #ecf0f3;
  cursor: pointer;

  border-radius: 50px;
  box-shadow: -8px -4px 8px 0px #ffffff76, 8px 4px 12px 0px rgba(94, 104, 121, 0.288);
`;

export const DropdownText = styled.div`
  display: flex;
  background: none;
  color: #37373d;
  font-size: 1.2em;
  cursor: pointer;

  & > .field {
    padding-top: 10px;
  }

  & > .arrow {
    position: relative;
    height: 40px;
    width: 40px;
    display: inline-flex;
    margin: 0 5px;
    margin-left: 50px;
    margin-right: -10px;
    border-radius: 50%;
    z-index: 4;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
  }

  & > .arrow:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > .arrow > span {
    padding-top: 12px;
    padding-left: 12px;
    font-size: 18px;
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 80px;
  width: 200px;
  background: #ecf0f3;
  border-radius: 20px;
  box-shadow: -8px -4px 8px 0px #ffffff76, 8px 4px 12px 0px rgba(94, 104, 121, 0.288);

  & > li {
    position: relative;
    padding: 15px;
    list-style-type: none;
    color: #37373d;
    transition: all 0.2s ease;
  }

  & > li:first-child {
    border-radius: 20px 20px 0 0;
  }

  & > li:last-child {
    border-radius: 0 0 20px 20px;
  }

  & > li:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
