import React from 'react';

import Hero from '../components/Hero/hero.component';
import Features from '../components/Features/features.component';
import Contact from '../components/Contact/contact.component';
import { useBlogContext } from '../context/blog.context';

const Home = () => {
  const { posts } = useBlogContext();

  return (
    <>
      <Hero />
    
      <Features blogPosts={posts} />
      <Contact />
    </>
  );
};

export default Home;
