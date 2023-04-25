import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

import { FiMenu, FiX } from 'react-icons/fi';
import SearchBar from '../SearchBar/searchBar.component';

import {
  NavbarContainer,
  NavbarLogo,
  LogoContainer,
  NavbarItem,
  NavbarLink,
  MenuIcon,
  LeftNavbarMenu,
  RightNavbarMenu,
  ScrollOnClick,
} from './navbar.styles';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleMobileItemsClick = () => {
    setOpen(false);
  };

  const handleContactClick = () => {
    navigate('/');
    setOpen(false);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      console.log('home Page', location.pathname);
      console.log('inView', inView);

      setHomePage(true);
      console.log('homePage', homePage);
    } else {
      console.log('notHome Page', location.pathname);
      setHomePage(false);
      console.log('homePage', homePage);
    }
  }, [location.pathname]);

  // const scrolled = scrollPosition > 0;

  return (
    <div ref={ref}>
      <NavbarContainer inView={inView} open={open}>
        <LeftNavbarMenu inView={inView} open={open} left>
          <NavbarItem>
            <NavbarLink inView={inView} onClick={handleMobileItemsClick} to='/'>
              HOME
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              inView={inView}
              onClick={handleMobileItemsClick}
              to='/blogs'
            >
              BLOG
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              inView={inView}
              onClick={handleMobileItemsClick}
              to='/workout'
            >
              APP
            </NavbarLink>
          </NavbarItem>
        </LeftNavbarMenu>
        <LogoContainer>
          <NavbarLogo inView={inView} open={open} homePage={homePage} />
        </LogoContainer>
        <MenuIcon inView={inView} onClick={toggleMenu}>
          {open ? <FiX /> : <FiMenu />}
        </MenuIcon>

        <RightNavbarMenu inView={inView} open={open} right>
          {/* <NavbarItem>
            <NavbarLink inView={inView} onClick={toggleMenu} to='admin/login'>
              ADMIN
            </NavbarLink>
          </NavbarItem> */}
          <NavbarItem onClick={handleContactClick}>
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
