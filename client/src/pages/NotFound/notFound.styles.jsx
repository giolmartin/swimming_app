import styled from 'styled-components';
import { WesAndersonDark } from '../../global.styles';

export const NotFoundContainer = styled.div`
  background-color: ${WesAndersonDark.primary.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundTitle = styled.h1`
  color: ${WesAndersonDark.primary.text};
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const NotFoundMessage = styled.p`
  color: ${WesAndersonDark.primary.text};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const HomeButton = styled.button`
  background-color: ${WesAndersonDark.primary.accent1};
  color: ${WesAndersonDark.primary.background};
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${WesAndersonDark.primary.accent2};
  }
`;
