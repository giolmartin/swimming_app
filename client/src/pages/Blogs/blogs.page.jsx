import React, { useState, useEffect } from 'react';

import {
  BlogPageContainer,
  BlogTitle,
  BlogPostsContainer,
  Content,
} from './blogs.styles';
import { useBlogContext } from '../../context/blog.context';

import Filter from '../../components/Filter/filter.component';
import Pagination from '../../components/Pagination/pagination.component';
import BlogPostCard from '../../components/BlogPostCard/blogPostCard.component';

const BlogsPage = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const {
    posts,
    searchResults,
    filteredPosts,
    filterPostsByCategory,
    currentPage,
    totalPages,
    handlePageChange,
  } = useBlogContext();

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    filterPostsByCategory(category);
    console.log('Filtering by category:', category);
  };

  const filterPosts = () => {
    if (activeFilter === 'all')
      return searchResults.length > 0 ? searchResults : posts;
    console.log('Filtering by category:', activeFilter);
    return filteredPosts;
  };

  useEffect(() => {
    if (activeFilter === null) {
      setActiveFilter('all');
      filterPosts();
    } else {
      filterPosts();
    }
  }, [currentPage, totalPages, activeFilter]);

  return (
    <BlogPageContainer>
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterClick} />
      <Content>
        <BlogTitle>Latest Blog Posts</BlogTitle>
        <Pagination
          style={{ marginBottom: '2rem' }}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          activeFilter={activeFilter}
        />

        <BlogPostsContainer>
          {filterPosts().map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </BlogPostsContainer>
      </Content>
    </BlogPageContainer>
  );
};

export default BlogsPage;
