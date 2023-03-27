import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BlogFeaturesSection,
  BlogFeatureCard,
  BlogFeatureTitle,
  BlogFeatureDescription,
  BlogPostImage,
} from './features.styles';

import { InView } from 'react-intersection-observer';
import { easeIn } from 'framer-motion';

const Features = ({ blogPosts }) => {
  const [visible, setVisible] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <InView as='div' onChange={(inView) => setVisible(inView)}>
      <BlogFeaturesSection>
        {blogPosts.slice(0, 4).map((post, index) => (
          <BlogFeatureCard
            key={post.id}
            initial='hidden'
            animate={visible ? 'visible' : 'hidden'}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: easeIn, delay: index * 0.2 }}
          >
            <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
              <BlogPostImage src={post.imageUrl} alt={post.title} />
              <BlogFeatureTitle>{post.title}</BlogFeatureTitle>
              <BlogFeatureDescription>{post.excerpt}</BlogFeatureDescription>
            </Link>
          </BlogFeatureCard>
        ))}
      </BlogFeaturesSection>
    </InView>
  );
};

export default Features;
