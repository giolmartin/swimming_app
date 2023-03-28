import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AdminPostsContainer,
  Button,
  ButtonsContainer,
  PostAuthorAndDate,
  PostDetails,
  PostItem,
  PostList,
  PostSubtitle,
  PostTitle,
  Title,
} from './adminPosts.styles';
import {
  fetchPostById,
  fetchPosts,
  fetchPostsByCategory,
} from '../../../services/blog.requests';
import { blogPostsMock } from '../../../data/blog.data';

const AdminPosts = () => {
  const [posts, setPosts] = useState([]); // Replace with fetched posts
  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  console.log('Admin Posts mounted');
  // useEffect(() => {
  //   // Fetch posts
  //   const fetchPosts = async () => {
  //   try {
  //     const posts = await fetchBlogs();
  //     setPosts(posts);
  //   } catch (error) {
  //     console.error('Error during fetching posts:', error);
  //   }
  //   };
  // }, []);
  useEffect(() => {
    setPosts(blogPostsMock);
  }, []);
  const handleCreatePost = () => {};

  const handleUpdatePost = () => {};

  //TODO: Create the /admin/dashboard/posts/edit/${id} route
  const handleEditPost = async (id) => {
    setSelectedPost(posts.find((post) => post.id === id));
    navigate(`/admin/dashboard/posts/edit/${id}`);
    // try {
    //   const post = await fetchPostById(id);
    //   setSelectedPost(post);
    // } catch (error) {
    //   console.error('Error during fetching post:', error);
    // }
  };

  const handleDeletePost = () => {};

  return (
    <AdminPostsContainer>
      <Title>Manage Posts</Title>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostDetails>
              <div>
                <PostTitle>{post.title}</PostTitle>
                <PostSubtitle>{post.subtitle}</PostSubtitle>
              </div>
              <PostAuthorAndDate>
                {post.author} - {post.date}
              </PostAuthorAndDate>
            </PostDetails>
            <ButtonsContainer>
              <Button onClick={() => handleEditPost(post.id)}>Edit</Button>
              <Button onClick={() => handleDeletePost(post.id)}>Delete</Button>
            </ButtonsContainer>
          </PostItem>
        ))}
      </PostList>
    </AdminPostsContainer>
  );
};

export default AdminPosts;
