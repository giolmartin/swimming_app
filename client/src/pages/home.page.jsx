import React from 'react';

import Hero from '../components/Hero/hero.component';
import Intro from '../components/Intro/intro.component';
import Features from '../components/Features/features.component';
import Contact from '../components/Contact/contact.component';
import { blogPostsMock } from '../data/blog.data';
const Home = () => {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
      <Features blogPosts={blogPostsMock} />
      <Contact />
    </>
  );
};

export default Home;
