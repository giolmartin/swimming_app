import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CardDateAuthor = styled.p`
  font-size: 1rem;
  color: ${WesAndersonColors.accent};
  margin-bottom: 1rem;
`;

export const CardExcerpt = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;
