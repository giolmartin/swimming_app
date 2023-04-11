import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled, { css } from 'styled-components';
import Logo from './logo.component';
import { WesAndersonWaterColors, WesAndersonNavBar } from '../../global.styles';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ inView }) =>
    inView
      ? WesAndersonNavBar.before.background
      : WesAndersonNavBar.after.background};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s;

  @media (max-width: 1170px) {
    justify-content: space-between;
    padding: 0 2rem;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-family: 'Futura', sans-serif;

  ${({ left }) =>
    left &&
    css`
      margin-right: auto;
    `}

  ${({ right }) =>
    right &&
    css`
      margin-left: auto;
    `}
    

    @media (max-width: 1170px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background-color: ${WesAndersonNavBar.before.background};
    flex-direction: column;
    width: 100%;
    position: ${({ right }) => (right ? 'absolute' : 'static')};
    top: ${({ right }) => (right ? '100%' : 'auto')};
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

  @media (max-width: 1170px) {
    padding-top: 2rem;
  }
`;

export const RightNavbarMenu = styled(NavbarMenu)`
  z-index: 100;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const NavbarLogo = styled(Logo)`
  height: ${({ inView, scrolled, logoSize }) =>
    inView || scrolled || logoSize === 'large' ? '8rem' : '5rem'};
  color: ${({ inView, scrolled }) =>
    inView || scrolled
      ? WesAndersonNavBar.before.text
      : WesAndersonNavBar.after.text};

  transition: height 0.3s, fill 0.4s;
  @media (max-width: 1170px) {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }
`;

export const NavbarItem = styled.li`
  margin: 0 1rem;
  font-family: 'Futura', sans-serif;
  color: ${({ inView, scrolled }) =>
    inView || scrolled
      ? WesAndersonNavBar.before.text
      : WesAndersonNavBar.after.text};

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
  color: ${({ inView, scrolled }) =>
    inView || scrolled
      ? WesAndersonNavBar.before.text
      : WesAndersonNavBar.after.text};
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Futura', sans-serif;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
    background-color: #fff;
    border-radius: 4px;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1170px) {
    display: block;
    color: ${({ inView, scrolled }) =>
      inView || scrolled
        ? WesAndersonNavBar.before.text
        : WesAndersonNavBar.after.text};
    font-size: 1.5rem;
    cursor: pointer;
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
  font-size: 1.2rem;
  font-family: 'Futura', sans-serif;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${WesAndersonWaterColors.secondary.deepWater};
    background-color: #fff;
    border-radius: 4px;
  }
`;
