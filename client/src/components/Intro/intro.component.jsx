import React from 'react';
import { IntroSection, Headline, Subheadline, BodyText } from './intro.styles';
const Intro = () => {
  return (
    <IntroSection>
      <Headline>Welcome to The SwimLife!</Headline>
      <Subheadline>
        Dive into the latest swimming tips, techniques, and news
      </Subheadline>
      <BodyText>
        Whether you're a seasoned swimmer or just getting started, The SwimLife
        has everything you need to take your swimming to the next level. Our
        expert coaches and trainers share their knowledge and experience to help
        you improve your technique, endurance, and performance in the water.
      </BodyText>
    </IntroSection>
  );
};

export default Intro;
