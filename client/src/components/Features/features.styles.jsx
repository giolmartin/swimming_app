import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WesAndersonColors } from '../../global.styles';

export const BlogFeaturesSection = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  ${'' /* flex-wrap: wrap; */}
  ${'' /* justify-content: center; */}

  background-color: ${WesAndersonColors.background};

  @media (max-width: 1272px) {
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
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
  flex: 0 1 calc(25% - 2rem);
  background-color: ${WesAndersonColors.formBackground};
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: ${WesAndersonColors.text};
  ${'' /* transition: transform 0.2s; */}

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
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
