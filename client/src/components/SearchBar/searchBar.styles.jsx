import styled from 'styled-components';
import { WesAndersonColors, WesAndersonNavBar } from '../../global.styles';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ inputFocused }) =>
    inputFocused ? WesAndersonNavBar.after.background : 'transparent'};

  border-radius: 4px;
  padding: 0 0.5rem;
  position: relative;

  &:hover,
  &:focus-within {
    background-color: ${WesAndersonNavBar.after.background};
  }

  @media (max-width: 1170px) {
    background-color: ${WesAndersonNavBar.before.background};

    &:hover,
    &:focus-within {
      background-color: ${WesAndersonNavBar.before.background};
    }
  }
`;
export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-family: 'Josefin Slab', sans-serif;
  font-size: 1.3rem;
  color: ${WesAndersonNavBar.after.text};
  padding: 0.5rem;
  outline: none;
  flex-grow: 1;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;

  &::placeholder {
    color: ${WesAndersonColors.primary.text};
    opacity: 1;
  }

  ${SearchContainer}:hover &,
  ${SearchContainer}:focus-within & {
    opacity: 1;
    pointer-events: auto;
    box-shadow:  0 1px ${WesAndersonNavBar.before.background};
  }

  @media (max-width: 1170px) {
    color: ${WesAndersonNavBar.before.text};

    &::placeholder {
      color: ${WesAndersonNavBar.before.text};
      opacity: 1;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: ${WesAndersonNavBar.before.background};
  border: none;
  border-radius: 4px;
  color: ${WesAndersonNavBar.before.text};
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: ${WesAndersonColors.secondary.accent};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 1px;
    background-color: ${WesAndersonNavBar.after.background};
    opacity: 0.5;
    transform: translateY(-50%);
  }
`;
