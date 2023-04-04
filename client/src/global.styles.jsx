import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'react-router-dom';

export const WesAndersonColors = {
  primary: {
    background: '#F5F5DC', // beige
    formBackground: '#FFFFFF', // white
    text: '#3F3F3F', // dark gray
    accent: '#DAA520', // goldenrod
    linkColor: '#2AA198',
  },
  secondary: {
    background: '#E1DED1', // light beige
    formBackground: '#F0F0F0', // light gray
    text: '#5F5F5F', // gray
    accent: '#FFC107', // amber
  },
  post: {
    background: '#F1EFE7',
    text: '#3E3E3E',
    accent: '#D8A47F',
  },
  comments: {
    container: '#F3DF6C',
    background1: '#F6A8A6',
    background2: '#52796F',
    contrast: '#354EAC',
    accent: '#F28C38',
  },
};

export const WesAndersonDark = {
  primary: {
    background: '#2C2B2B', // dark gray
    formBackground: '#454444', // grayish-black
    text: '#EDEDED', // light gray
    accent1: '#B68C5D', // dark gold
    accent2: '#DAA520', // goldenrod
    linkColor: '#517369', // dark teal
  },
  secondary: {
    background: '#3C3B3B', // dark gray
    formBackground: '#595757', // grayish-black
    text: '#F7F7F7', // white
    accent: '#A67F56', // dark amber
  },
};

export const WesAndersonWaterColors = {
  primary: {
    deepWater: '#0B3D91', // deep blue
    poolWater: '#47ABCC', // light blue
    foam: '#E0FFFF', // light cyan
    poolside: '#F0E68C', // khaki
  },
  secondary: {
    deepWater: '#1E5AA8', // slightly lighter deep blue
    poolWater: '#63B7D5', // slightly lighter light blue
    foam: '#E6F5FF', // slightly lighter light cyan
    poolside: '#FFFACD', // slightly lighter khaki
  },
};

export const WesAndersonExercises = {
  primary: '#1E90FF', // A shade of blue representing sports, fitness, and swimming
  secondary: '#FFA07A', // A shade of light coral for contrast
  accent1: '#FFD700', // A shade of gold for accentuating elements
  accent2: '#32CD32', // A shade of lime green for energy and freshness
  background: '#F5F5F5', // A light background color for easy readability
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Monserrat', sans-serif;
    }
    a {
    color: ${WesAndersonColors.primary.text};
    text-decoration: none;
  }

  a:hover {
    color: ${WesAndersonColors.secondary.accent};
  }
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${WesAndersonColors.primary.accent};
  color: #fff;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${WesAndersonColors.secondary.accent};
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`;
