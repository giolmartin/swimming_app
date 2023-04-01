import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WesAndersonColors } from '../../global.styles';

export const BlogFeaturesContainer = styled.div`
  border: 2px solid ${WesAndersonColors.primary.accent};
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0;
`;

export const BlogFeaturesTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${WesAndersonColors.primary.text};
`;

export const BlogFeaturesSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
