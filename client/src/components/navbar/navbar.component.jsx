import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { FiMenu, FiX } from 'react-icons/fi';
import SearchBar from '../SearchBar/searchBar.component';

import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  MenuIcon,
  LeftNavbarMenu,
  RightNavbarMenu,
  ScrollOnClick,
} from './navbar.styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   setScrollPosition(window.pageYOffset);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // const scrolled = scrollPosition > 0;

  return (
    <div ref={ref}>
      <NavbarContainer inView={inView}>
        <LeftNavbarMenu inView={inView} open={open} left>
          <NavbarItem>
            <NavbarLink inView={inView} onClick={toggleMenu} to='/'>
              HOME
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink inView={inView} onClick={toggleMenu} to='/blogs'>
              BLOG
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink inView={inView} onClick={toggleMenu} to='/workout'>
              APP
            </NavbarLink>
          </NavbarItem>
        </LeftNavbarMenu>
        <NavbarLogo inView={inView} open={open} />
        <MenuIcon inView={inView} onClick={toggleMenu}>
          {open ? <FiX /> : <FiMenu />}
        </MenuIcon>

        <RightNavbarMenu inView={inView} open={open} right>
          <NavbarItem>
            <NavbarLink inView={inView} onClick={toggleMenu} to='admin/login'>
              ADMIN
            </NavbarLink>
          </NavbarItem>
          <NavbarItem onClick={toggleMenu}>
            <ScrollOnClick
              inView={inView}
              to='contact'
              smooth={true}
              duration={500}
              offset={-60}
            >
              CONTACT
            </ScrollOnClick>
          </NavbarItem>
          <NavbarItem>
            <SearchBar />
          </NavbarItem>
        </RightNavbarMenu>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
