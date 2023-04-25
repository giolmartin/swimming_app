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
  const [activeFilter, setActiveFilter] = useState('');
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
    if (activeFilter === '' && activeFilter === null) {
      setActiveFilter('all');
      filterPosts();
    } else {
      filterPosts();
    }
  }, [currentPage, totalPages, activeFilter]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <BlogPageContainer>
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterClick} />
      <Content>
        <BlogTitle>{capitalizeFirstLetter(activeFilter)} Blog Posts</BlogTitle>

        <BlogPostsContainer>
          {filterPosts().map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </BlogPostsContainer>

        <Pagination
          style={{ marginTop: '3rem' }}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          activeFilter={activeFilter}
        />
      </Content>
    </BlogPageContainer>
  );
};

export default BlogsPage;
