import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WesAndersonColors, WesAndersonWaterColors } from '../../global.styles';

export const BlogFeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  ${'' /* display: flex; */}
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  ${'' /* flex-wrap: wrap; */}
  ${'' /* justify-content: center; */}

  background-color: ${WesAndersonColors.secondary.background};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const BlogPostImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const BlogFeaturesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const BlogFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const BlogFeatureCard = styled(motion.div)`
  background-color: ${WesAndersonColors.secondary.formBackground};
  color: ${WesAndersonColors.secondary.text};
  flex: 0 1 calc(25% - 2rem);
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
  ${'' /* transition: transform 0.2s; */}

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media (max-width: 1100px) {
    flex: 0 1 calc(33.333% - 2rem);
  }
  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 2px);
    min-width: 300px;
  }
`;

export const BlogFeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const BlogFeatureDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
