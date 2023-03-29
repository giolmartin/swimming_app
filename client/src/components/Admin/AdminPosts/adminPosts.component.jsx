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
import { useBlogContext } from '../../../context/blog.context';
import { blogPostsMock } from '../../../data/blog.data';

const AdminPosts = () => {
  const { posts, setPosts, deletePost } = useBlogContext();
  // const [posts, setPosts] = useState([]); // Replace with fetched posts
  const [selectedPost, setSelectedPost] = useState(null);
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
  // useEffect(() => {
  //   setPosts(blogPostsMock);
  // }, []);

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

  //Deletes post from the database(TODO: Add confirmation dialog)
  //TODO: Finish the function and create the request method
  const handleDeletePost = (id) => {
    deletePost(id);
  };

  return (
    <AdminPostsContainer>
      <Title>Manage Posts</Title>
      <Button onClick={() => navigate('/admin/dashboard/posts/edit/create')}>
        Create Post
      </Button>
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
