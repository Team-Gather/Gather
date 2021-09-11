import React, { useState } from 'react';
import { NavbarContainer, NavItems, NavLogo, Post, Profile, Options } from './NavbarStyle';
import { ROUTES } from 'utils/routes';
import { FormOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const onHandleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <NavbarContainer>
      <NavLogo to={ROUTES.MAIN}>Gather</NavLogo>
      <NavItems>
        <Post to={ROUTES.POST} className="write">
          <FormOutlined />
        </Post>
        <Profile onClick={onHandleDropdown} isDropdown={isDropdown}>
          <MenuOutlined />
          {isDropdown && (
            <Options>
              <li>
                <Link to={ROUTES.PROFILE}>Profile</Link>
              </li>
              <li>My Post</li>
              <li>Log Out</li>
            </Options>
          )}
        </Profile>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
