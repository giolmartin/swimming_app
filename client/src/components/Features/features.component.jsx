import React from 'react';

import LazyLoadedCard from '../LazyLoadedCard/lazyLoadedCard.component';

import { useBlogContext } from '../../context/blog.context';

import {
  BlogFeaturesSection,
  BlogFeaturesContainer,
  BlogFeaturesTitle,
} from './features.styles';

const Features = () => {
  const { popularPosts } = useBlogContext();

  return (
    <BlogFeaturesContainer>
      <BlogFeaturesTitle>Featured Posts</BlogFeaturesTitle>
      <BlogFeaturesSection>
        {popularPosts.map((post, index) => (
          <LazyLoadedCard key={post.id} post={post} />
        ))}
      </BlogFeaturesSection>
    </BlogFeaturesContainer>
  );
};

export default Features;
