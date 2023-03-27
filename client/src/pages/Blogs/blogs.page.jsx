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
  const { filteredPosts, filterPostsByCategory } = useBlogContext();
  const [latestBlogPosts, setLatestBlogPosts] = useState([]);

  // useEffect(() => {
  //   setLatestBlogPosts(latestBlogPosts);
  // }, []);

  // const handleFilterChange = (filter) => {
  //   setActiveFilter(filter);
  // };
  const handleFilterClick = (category) => {
    filterPostsByCategory(category);
  };

  return (
    <BlogPageContainer>
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterClick} />
      <Content>
        <BlogTitle>Latest Blog Posts</BlogTitle>

        <BlogPostsContainer>
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </BlogPostsContainer>
      </Content>
    </BlogPageContainer>
  );
};

export default BlogsPage;
