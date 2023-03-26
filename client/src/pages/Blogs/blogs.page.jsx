import React, { useState, useEffect } from 'react';
import {
  BlogPageContainer,
  BlogTitle,
  BlogPostsContainer,
  Content,
} from './blogs.styles';
import Filter from '../../components/Filter/filter.component';
import { blogPostsMock } from '../../data/blog.data';

import BlogPostCard from '../../components/BlogPostCard/blogPostCard.component';
const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogPostsMock);
    console.log(blogPosts);
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredBlogPosts = blogPosts.filter((post) =>
    activeFilter ? post.category === activeFilter : true
  );

  return (
    <BlogPageContainer>
      <Filter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <Content>
        <BlogTitle>Latest Blog Posts</BlogTitle>

        <BlogPostsContainer>
          {filteredBlogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </BlogPostsContainer>
      </Content>
    </BlogPageContainer>
  );
};

export default BlogPage;
// {blogPosts.map((post) => (
//   <BlogPostCard key={post.id} post={post} />
// ))}
