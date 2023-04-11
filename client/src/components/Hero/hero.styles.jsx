import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  background-color: #335c67;
  justify-content: center;
  align-items: center;
  height: 95vh;
  color: black;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

export const HeroText = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 25%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled.button`
  font-size: 1.2rem;
  padding: 12px 24px;
  background-color: #1e90ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #007acc;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    max-height: 300px;
    transform: scale(1.25);
  }
`;
