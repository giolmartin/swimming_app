import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${WesAndersonColors.background};
  color: ${WesAndersonColors.text};
`;
export const Image = styled.img`
  width: 25%;
  height: 25%;

  margin-bottom: 1rem;
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const AuthorDate = styled.p`
  font-size: 1rem;
  color: ${WesAndersonColors.accent};
  margin-bottom: 1rem;
`;

export const Introduction = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Content = styled.p`
  font-size: 1.125rem;
`;

export const Conclusion = styled.p`
  font-size: 1.25rem;
  margin-top: 2rem;
`;
