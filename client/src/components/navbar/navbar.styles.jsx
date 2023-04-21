import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled, { css } from 'styled-components';
import Logo from '../Logo/logo.component';
import { WesAndersonWaterColors, WesAndersonNavBar } from '../../global.styles';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ inView }) =>
    inView ? `rgba(254, 240, 172, 0)` : WesAndersonNavBar.after.background};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.2;

  @media (max-width: 1170px) {
    justify-content: space-between;
    z-index: ${({ open }) => (open ? '1000' : '100')};
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1170px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background-color: ${WesAndersonNavBar.before.background};
    flex-direction: column;
    width: 100%;
    left: 0;
    background-color: ${({ inView }) =>
      inView
        ? WesAndersonNavBar.before.background
        : WesAndersonNavBar.after.background};
    color: ${WesAndersonNavBar.before.text};

    transition: background-color 0.3s, color 0.4s;
    padding-top: 1rem 0;
  }
`;

export const LeftNavbarMenu = styled(NavbarMenu)`
  z-index: 101;
  margin-right: 15%;

  @media (max-width: 1170px) {
    padding-top: 2rem;
    align-items: center;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const RightNavbarMenu = styled(NavbarMenu)`
  z-index: 100;
  margin-left: 15%;

  @media (max-width: 1170px) {
    position: absolute;
    top: 100%;
    padding-bottom: 1rem;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  @media (max-width: 1170px) {
    padding: 0;
  }
`;
export const NavbarLogo = styled(Logo)`
  height: ${({ inView, scrolled }) => (inView || scrolled ? '5rem' : '5rem')};
  ${
    '' /* Transparent color to superpose the other on the hero page, also height on top is the height of the navbar and scroll down logo */
  }
  color: ${({ inView, scrolled }) =>
    inView || scrolled ? 'transparent' : WesAndersonNavBar.after.text};

  transition: height 0.3s, fill 0.4s;
  @media (max-width: 1170px) {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }
`;

export const NavbarItem = styled.li`
  margin: 0 1rem;
  font-family: 'Poppins', sans-serif;
  color: ${({ inView, scrolled }) =>
    inView || scrolled
      ? WesAndersonNavBar.before.text
      : WesAndersonNavBar.after.text};

  @media (max-width: 1170px) {
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
  color: ${({ inView, scrolled }) =>
    inView || scrolled
      ? WesAndersonNavBar.before.text
      : WesAndersonNavBar.after.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-weight: bold;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
    background-color: #fff;
    border-radius: 4px;
  }
  @media (max-width: 1170px) {
    font-size: 1.2rem;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 1170px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: block;
    color: ${({ inView, scrolled }) =>
      inView || scrolled
        ? WesAndersonNavBar.before.text
        : WesAndersonNavBar.after.text};
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1000;
  }
`;

export const ScrollOnClick = styled(ScrollLink)`
  display: flex;
  align-items: center;
  color: ${({ inView, scrolled }) =>
    inView || scrolled
      ? WesAndersonNavBar.before.text
      : WesAndersonNavBar.after.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
    background-color: #fff;
    border-radius: 4px;
  }

  @media (max-width: 1170px) {
    font-size: 1.2rem;
  }
`;
