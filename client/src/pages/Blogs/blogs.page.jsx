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
  const { posts, searchResults, filteredPosts, filterPostsByCategory } =
    useBlogContext();

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    filterPostsByCategory(category);
    console.log('Filtering by category:', category);
  };

  const filterPosts = () => {
    if (!activeFilter) return searchResults.length > 0 ? searchResults : posts;
    console.log('Filtering by category:', activeFilter);
    return filteredPosts;
  };

  return (
    <BlogPageContainer>
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterClick} />
      <Content>
        <BlogTitle>Latest Blog Posts</BlogTitle>

        <BlogPostsContainer>
          {filterPosts().map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}

          {/* {(searchResults.length > 0 ? searchResults : posts).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))} */}
        </BlogPostsContainer>
      </Content>
    </BlogPageContainer>
  );
};

export default BlogsPage;
