import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Monserrat', sans-serif;
    }
    `;

export const WesAndersonColors = {
  background: '#F5F5DC', // beige
  formBackground: '#FFFFFF', // white
  text: '#3F3F3F', // dark gray
  accent: '#DAA520', // goldenrod
};
