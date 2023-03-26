import React from 'react';
import {
  HeroSection,
  HeroContent,
  HeroDescription,
  HeroTitle,
  HeroImage,
  HeroText,
  HeroButton,
} from './hero.styles';

const Hero = () => {
  return (
    <HeroSection id='home'>
      <HeroContent>
        <HeroText>
          <HeroTitle>Swim to Success</HeroTitle>
          <HeroDescription>
            Enjoy our free App while you swim to success.
          </HeroDescription>
          <HeroButton>START SWIMMING</HeroButton>
        </HeroText>
        <HeroImage src='./images/landing-wes.jpeg' alt='Swimming' />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
