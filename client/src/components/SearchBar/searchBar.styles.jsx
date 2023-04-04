import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${WesAndersonColors.primary.background};
  border-radius: 4px;
  padding: 0 0.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  color: ${WesAndersonColors.primary.text};
  padding: 0.5rem;
  outline: none;
  flex-grow: 1;

  &::placeholder {
    color: ${WesAndersonColors.primary.text};
    opacity: 0.5;
  }
`;

export const SearchButton = styled.button`
  background-color: ${WesAndersonColors.primary.accent};
  border: none;
  border-radius: 4px;
  color: ${WesAndersonColors.primary.background};
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${WesAndersonColors.secondary.accent};
  }
`;
