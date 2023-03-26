import React, { useState } from 'react';
import {
  BlogFeaturesSection,
  BlogFeaturesTitle,
  BlogFeaturesGrid,
  BlogFeatureCard,
  BlogFeatureTitle,
  BlogFeatureDescription,
} from './features.styles';

import { blogPostsMock as blockPosts } from '../../data/blog.data';
import { InView } from 'react-intersection-observer';
import { easeIn } from 'framer-motion';

const Features = ({ blogPosts }) => {
  const [visible, setVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <InView as='div' onChange={(inView) => setVisible(inView)}>
      <BlogFeaturesSection>
        <BlogFeaturesGrid>
          {blockPosts.slice(0, 4).map((post, index) => (
            <BlogFeatureCard
              key={post.id}
              initial='hidden'
              animate={visible ? 'visible' : 'hidden'}
              variants={cardVariants}
              transition={{ duration: 0.5, ease:'linear', delay: index * 0.2 }}
            >
              <BlogFeatureTitle>{post.title}</BlogFeatureTitle>
              <BlogFeatureDescription>{post.excerpt}</BlogFeatureDescription>
            </BlogFeatureCard>
          ))}
        </BlogFeaturesGrid>
      </BlogFeaturesSection>
    </InView>
  );
};

export default Features;
{
  /* 
<BlogFeaturesGrid>
        {mockData.map((post, index) => (
          <BlogFeatureCard
            key={index}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={variants}
          >
            <BlogFeatureTitle>{post.title}</BlogFeatureTitle>
            <BlogFeatureDescription>{post.description}</BlogFeatureDescription>
          </BlogFeatureCard>
        ))}
        ;
      </BlogFeaturesGrid> */
}
