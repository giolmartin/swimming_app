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

import { useAdminContext } from '../../../context/admin.context';

const AdminPosts = () => {
  const { posts, getPosts, deletePost, selectPost, selectedPost } =
    useAdminContext();
  // const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const navigate = useNavigate();
  console.log('Admin Posts mounted');


  useEffect(() => {
    if (selectedPost && selectedPost._id) {
      navigate(`/admin/dashboard/posts/edit/${selectedPost._id}`);
    }
  }, [selectedPost]);

  //TODO: Create the /admin/dashboard/posts/edit/${id} route
  const handleEditPost = async (id) => {
    try {
      if (id) {
        await selectPost(id);
      }
    } catch (error) {
      console.error('Error during fetching post:', error);
    }
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
          <PostItem key={post._id}>
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
              <Button onClick={() => handleEditPost(post._id)}>Edit</Button>
              <Button onClick={() => handleDeletePost(post._id)}>Delete</Button>
            </ButtonsContainer>
          </PostItem>
        ))}
      </PostList>
    </AdminPostsContainer>
  );
};

export default AdminPosts;
