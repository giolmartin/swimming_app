import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  MenuIcon,
  ArrowIcon,
  DropdownMenu,
  DropdownItem,
  ScrollOnClick,
} from './navbar.styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };
  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLogo href='#'>Swim to Success</NavbarLogo>
      <MenuIcon onClick={handleMenuClick}>
        {open ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavbarMenu open={open}>
        <NavbarItem>
          <NavbarLink to='/'>Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink>
            Blog
            <ArrowIcon onClick={handleDropdownClick}>
              {dropdownOpen ? <AiOutlineUp /> : <AiOutlineDown />}
            </ArrowIcon>
          </NavbarLink>
          <DropdownMenu isOpen={dropdownOpen}>
            <DropdownItem to='/blog'>Latest</DropdownItem>
            <DropdownItem to='/blog'>Nutrition</DropdownItem>
            <DropdownItem to='/blog'>Gear</DropdownItem>
          </DropdownMenu>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href='#workouts'>App Workout</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollOnClick to='contact' smooth={true} duration={500} offset={-60}>
            Contact
          </ScrollOnClick>
        </NavbarItem>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
