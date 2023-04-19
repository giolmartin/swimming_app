import styled from 'styled-components';
import Logo from '../Logo/logo.component';

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: black;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out;
  z-index: 100;

  @media (max-width: 1170px) {
    top: ${({ isVisible }) => (isVisible ? '1rem' : '5rem')};
    left: ${({ isVisible }) => (isVisible ? '50%' : '1rem')};
    transform: ${({ isVisible }) => (isVisible ? 'translateX(-50%)' : 'none')};
    transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out,
      left 0.3s ease-in-out;
  }
`;

export const HeroText = styled.p`
  font-family: 'Josefin Slab', serif;
  font-weight: 500;
  font-style: italic;
  font-size: 1.5rem;
  text-align: center;
  color: #428576;
  margin-top: 1rem;
`;

export const HeroLogo = styled(Logo)`
  height: ${({ inView }) => (inView ? '10rem' : '2rem')};
  color: ${({ inView }) => (inView ? '#428576' : 'transparent')};
  z-index: 0;
  transition: height 0.3s ease-in-out, color 0.3s ease-in-out;
`;
