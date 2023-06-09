import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogContext } from '../../context/blog.context';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDateAuthor,
  CardExcerpt,
  ReadMoreButton,
} from './blogPostCard.styles';

const BlogPostCard = ({ post }) => {
  const { formatDate } = useBlogContext();

  const date = formatDate(post.createdAt);

  return (
    <Link to={`/blogs/post/${post._id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardImage src={post.imageUrl} alt={post.title} />
        <CardContent>
          <CardTitle>{post.title}</CardTitle>
          <CardDateAuthor>
            Written by {post.author} on {date}
          </CardDateAuthor>
          <CardExcerpt>{post.excerpt}</CardExcerpt>
        </CardContent>
        <ReadMoreButton>Read More</ReadMoreButton>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
