import React, { useEffect } from 'react';

import LazyLoadedCard from '../LazyLoadedCard/lazyLoadedCard.component';

import { useBlogContext } from '../../context/blog.context';

import {
  BlogFeaturesSection,
  BlogFeaturesContainer,
  BlogFeaturesTitle,
} from './features.styles';

const Features = () => {
  const { filteredPosts } = useBlogContext();

  return (
    <BlogFeaturesContainer>
      <BlogFeaturesTitle>Featured Posts</BlogFeaturesTitle>
      <BlogFeaturesSection>
        {filteredPosts.slice(0, 6).map((post, index) => (
          <LazyLoadedCard key={post.id} post={post} />
        ))}
      </BlogFeaturesSection>
    </BlogFeaturesContainer>
  );
};

export default Features;
