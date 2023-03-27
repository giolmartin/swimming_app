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
