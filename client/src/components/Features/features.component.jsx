import React from 'react';

import LazyLoadedCard from '../LazyLoadedCard/lazyLoadedCard.component';

import { useBlogContext } from '../../context/blog.context';

import {
  BlogFeaturesSection,
  BlogFeaturesContainer,
  BlogFeaturesTitle,
  MoreButton,
} from './features.styles';

const Features = () => {
  const { popularPosts } = useBlogContext();

  return (
    <BlogFeaturesContainer>
      <BlogFeaturesTitle>Latest Posts</BlogFeaturesTitle>
      <MoreButton to='/blogs'>+</MoreButton>
      <BlogFeaturesSection>
        {popularPosts.map((post, index) => (
          <LazyLoadedCard key={post.id} post={post} />
        ))}
      </BlogFeaturesSection>
    </BlogFeaturesContainer>
  );
};

export default Features;
