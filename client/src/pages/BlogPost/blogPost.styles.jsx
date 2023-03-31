import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${WesAndersonColors.post.background};
  color: ${WesAndersonColors.post.text};
  font-family: 'Roboto', sans-serif;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  margin-bottom: 1rem;
`;

export const SectionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${WesAndersonColors.post.accent};
  font-family: 'Playfair Display', serif;
`;

export const AuthorDate = styled.p`
  font-size: 1rem;
  color: ${WesAndersonColors.post.accent};
  margin-bottom: 1rem;
  font-style: italic;
`;

export const Introduction = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: justify;
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

export const Content = styled.p`
  font-size: 1.125rem;
  text-align: justify;
`;

export const Conclusion = styled.p`
  font-size: 1.25rem;
  margin-top: 2rem;
  text-align: justify;
`;
