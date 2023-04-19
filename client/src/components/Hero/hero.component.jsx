import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  HeroSection,
  HeroContent,
  HeroImage,
  LogoWrapper,
  HeroText,
  HeroLogo,
} from './hero.styles';

const Hero = () => {
  const [logoVisible, setLogoVisible] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.99999,
  });

  useEffect(() => {
    if (inView) {
      setLogoVisible(true);
    } else {
      console.log('not in view');
      setLogoVisible(false);
    }
  }, [inView, logoVisible]);

  return (
    <HeroSection id='home' ref={ref}>
      <LogoWrapper isVisible={logoVisible}>
        <HeroLogo inView={inView} />
        <HeroText>Welcome to the Swim Spot!</HeroText>
      </LogoWrapper>
      <HeroContent>
        <HeroImage src='./images/hero.jpeg' alt='Swimming' />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
