import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WesAndersonColors } from '../../global.styles';

export const BlogFeaturesContainer = styled.div`
  background-color: #428576;
  padding: 2rem;
  position: relative;
`;

export const BlogFeaturesTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: bold;
  color: ${WesAndersonColors.primary.text};

  &:hover {
    color: ${WesAndersonColors.primary.accent};
    transition: color 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const BlogFeaturesSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

export const MoreButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40px;
  height: 40px;
  background-color: #ffa07a;
  border-radius: 50%;
  text-decoration: none;
  color: ${WesAndersonColors.primary.text};
  font-size: 2rem;
  position: absolute;
  right: 3%;
  top: 3%;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff7f50;
  }
`;
