import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { border, color, shadow, transition } from 'styles/Theme';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 1.2rem 0.5rem;
  z-index: 6;
  position: sticky;
  color: #44476a;

  @media screen and (max-width: 1100px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 0.4rem;
    height: 60px;
  }

  box-shadow: ${shadow.bottom};
`;

export const NavLogo = styled(Link)`
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 10px;
  padding: 1rem;

  @media screen and (max-width: 600px) {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    padding-right: 0.2rem;
  }

  & > .write {
    margin-right: 3rem;

    @media screen and (max-width: 600px) {
      margin-right: 1rem;
    }
  }
`;

export const Post = styled(Link)`
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  padding: 1rem;
  border: ${border.primary};
  box-shadow: ${shadow.primary};

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem;
  }

  &:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: ${color.background};
    border-radius: 5px;
    z-index: -1;
    box-shadow: ${shadow.pressed};
  }

  & > span {
    color: ${color.primaryNoLinear};
  }
`;

export const Profile = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  padding: 1rem;
  transition: ${transition.primary};
  color: ${({ isDropdown }) => (isDropdown ? color.white : '')};
  background: ${({ isDropdown }) => (isDropdown ? color.primary : color.background)};
  box-shadow: ${shadow.primary};

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5rem;
  }

  &:hover {
    box-shadow: ${shadow.hover};
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 80px;
  right: 0px;
  width: 160px;
  background: ${color.background};
  border-radius: 20px;
  box-shadow: -8px -4px 8px 0px #ffffff76, 8px 4px 12px 0px rgba(94, 104, 121, 0.288);

  & > li {
    position: relative;
    padding: 15px;
    list-style-type: none;
    color: #37373d;
  }

  & > li:first-child {
    border-radius: 20px 20px 0 0;
  }

  & > li:last-child {
    border-radius: 0 0 20px 20px;
  }

  & > li:hover {
    background: ${color.background};
    box-shadow: ${shadow.pressed};
  }

  & > li > a {
    display: block;
  }
`;
