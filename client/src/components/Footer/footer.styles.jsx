import styled, { keyframes } from 'styled-components';
import { WesAndersonWaterColors } from '../../global.styles';

const waveAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const FooterContainer = styled.footer`
  background-color: ${WesAndersonWaterColors.primary.foam};
  color: ${WesAndersonWaterColors.primary.deepWater};
  display: flex;
  justify-content: space-around;

  align-items: flex-start;
  padding: 10rem;
  flex-wrap: wrap;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  li:hover {
    animation: ${waveAnimation} 0.8s linear infinite;
    color: ${WesAndersonWaterColors.aqua};
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h3 {
      font-size: 1.3rem;
    }
  }
`;
