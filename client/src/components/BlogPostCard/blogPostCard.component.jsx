import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../../context/blog.context';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDateAuthor,
  CardExcerpt,
} from './blogPostCard.styles';

const BlogPostCard = ({ post }) => {
  const { selectPost } = useBlogContext();
  const navigate = useNavigate();

  const handleClick = () => {
    selectPost(post);
    navigate(`/blog/${post.id}`);
  };
  return (
    <div onClick={handleClick}>
      <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
        <Card>
          <CardImage src={post.imageUrl} alt={post.title} />
          <CardContent>
            <CardTitle>{post.title}</CardTitle>
            <CardDateAuthor>
              Written by {post.author} on {post.date}
            </CardDateAuthor>
            <CardExcerpt>{post.excerpt}</CardExcerpt>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default BlogPostCard;
