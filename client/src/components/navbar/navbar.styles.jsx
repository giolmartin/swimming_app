import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { WesAndersonWaterColors } from '../../global.styles';

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
    background-color: ${WesAndersonWaterColors.secondary.deepWater};
    color: ${WesAndersonWaterColors.secondary.foam}

    padding: 2rem 0;
  }
`;

export const NavbarItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
export const BlogMenuItem = styled(NavbarItem)`
  position: relative;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
    background-color: ${WesAndersonWaterColors.secondary.poolside};
    border-radius: 4px;
  }
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
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
  position: absolute;
  display: none;
  min-width: 160px;
  background-color: ${WesAndersonWaterColors.secondary.deepWater};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 4px;
  z-index: 10;

  ${BlogMenuItem}:hover & {
    display: block;
  }
`;

export const DropdownLink = styled(Link)`
  color: ${WesAndersonWaterColors.secondary.foam};
  padding: 12px 16px;
  text-decoration: none;
  font-size: 1rem;
  display: block;

  &:hover {
    background-color: ${WesAndersonWaterColors.secondary.poolWater};
  }
`;

export const ArrowIcon = styled.div`
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const ScrollOnClick = styled(ScrollLink)`
  cursor: pointer;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
    background-color: #fff;
    border-radius: 4px;
  }
`;
