import React, { useState, useEffect } from 'react';
import {
  BlogPageContainer,
  BlogTitle,
  BlogPostsContainer,
  Content,
} from './blogs.styles';
import Filter from '../../components/Filter/filter.component';
import { useBlogContext } from '../../context/blog.context';

import BlogPostCard from '../../components/BlogPostCard/blogPostCard.component';

const BlogsPage = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const { posts, filterPostsByCategory } = useBlogContext();

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    filterPostsByCategory(category);
  };

  useEffect(() => {
    filterPostsByCategory('all');
  }, []);

  return (
    <BlogPageContainer>
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterClick} />
      <Content>
        <BlogTitle>Latest Blog Posts</BlogTitle>

        <BlogPostsContainer>
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </BlogPostsContainer>
      </Content>
    </BlogPageContainer>
  );
};

export default BlogsPage;
