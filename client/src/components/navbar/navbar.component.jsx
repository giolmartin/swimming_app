import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  MenuIcon,
  ArrowIcon,
  BlogMenuItem,
  DropdownMenu,
  DropdownLink,
  ScrollOnClick,
} from './navbar.styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarContainer>
      <NavbarLogo href='#'>Swim to Success</NavbarLogo>
      <MenuIcon onClick={toggleMenu}>{open ? <FiX /> : <FiMenu />}</MenuIcon>
      <NavbarMenu open={open}>
        <NavbarItem>
          <NavbarLink onClick={toggleMenu} to='/'>
            Home
          </NavbarLink>
        </NavbarItem>
        <BlogMenuItem>
          Blog
          <DropdownMenu>
            <DropdownLink onClick={toggleMenu} to='/blogs'>
              Latest
            </DropdownLink>
            <DropdownLink onClick={toggleMenu} to='/blogs/technique'>
              Technique
            </DropdownLink>
            <DropdownLink onClick={toggleMenu} to='/blogs/nutrition'>
              Nutrition
            </DropdownLink>
            <DropdownLink onClick={toggleMenu} to='/blogs/gear'>
              Gear
            </DropdownLink>
            <DropdownLink onClick={toggleMenu} to='/blogs/training'>
              Training
            </DropdownLink>
          </DropdownMenu>
        </BlogMenuItem>
        <NavbarItem>
          <NavbarLink onClick={toggleMenu} to='workout'>
            APP
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink onClick={toggleMenu} to='admin/login'>
            ADMIN
          </NavbarLink>
        </NavbarItem>
        <NavbarItem onClick={toggleMenu}>
          <ScrollOnClick to='contact' smooth={true} duration={500} offset={-60}>
            Contact
          </ScrollOnClick>
        </NavbarItem>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
