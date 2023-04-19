import React from 'react';
import { Link } from 'react-router-dom';
import {
  MinimalCard,
  MinimalCardTitle,
  MinimalCardExcerpt,
  MinimalExcerptContainer,
  MinimalTitleContainer,
  MinimalReadMoreButton,
} from './minimalBlogPostCard.styles';

const MinimalBlogCard = ({ post }) => {
  return (
    <Link to={`/blogs/post/${post._id}`} style={{ textDecoration: 'none' }}>
      <MinimalCard>
        <MinimalTitleContainer>
          <MinimalCardTitle>{post.title}</MinimalCardTitle>
        </MinimalTitleContainer>
        <MinimalExcerptContainer>
          <MinimalCardExcerpt>{post.excerpt}</MinimalCardExcerpt>
        </MinimalExcerptContainer>
        <MinimalReadMoreButton>Read More</MinimalReadMoreButton>
      </MinimalCard>
    </Link>
  );
};

export default MinimalBlogCard;
