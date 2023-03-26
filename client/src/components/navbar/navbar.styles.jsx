import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavbarLogo = styled.a`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1e90ff;
    padding: 2rem 0;
  }
`;

export const NavbarItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    color: #1e90ff;
    background-color: #fff;
    border-radius: 4px;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
// ...other styled components...

export const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #1e90ff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled(Link)`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #4caf50;
  }
`;

export const ArrowIcon = styled.div`
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const ScrollOnClick = styled(ScrollLink)`
  cursor: pointer;
`;
