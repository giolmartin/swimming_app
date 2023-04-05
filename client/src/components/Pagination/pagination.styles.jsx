import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-family: 'Josefin Sans', monospace;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid ${WesAndersonColors.secondary.accent};
  border-radius: 3px;
  background-color: ${(props) =>
    props.active
      ? WesAndersonColors.primary.accent
      : WesAndersonColors.primary.background};
  color: ${WesAndersonColors.primary.text};
  cursor: pointer;
  &:hover {
    background-color: ${WesAndersonColors.secondary.accent};
    color: ${WesAndersonColors.secondary.background};
  }
  &:disabled {
    background-color: ${WesAndersonColors.secondary.formBackground};
    color: ${WesAndersonColors.secondary.text};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PageNumber = styled.span`
  margin: 0 5px;
  color: ${(props) =>
    props.active
      ? WesAndersonColors.primary.text
      : WesAndersonColors.primary.accent};
  font-size: 1.1rem;
  font-weight: bold;
`;
