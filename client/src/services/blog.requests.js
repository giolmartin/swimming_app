import axios from 'axios';
const BASE_URL = process.env.API_URL || 'v1';

//TODO: Testing required
//Blog requests
export const httpsFetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const httpsFetchPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/post/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const httpsFetchPostsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blogs in category ${category}:`, error);
    return [];
  }
};

export const httpsFetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
export const httpsFetchTags = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/tags`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const httpsSearchPosts = async (keywords) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/search`, {
      params: { keywords },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error searching for posts with keywords '${keywords}':`,
      error
    );
    return [];
  }
};

export const httpsFetchPopularPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/popular`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
};
export const httpsFetchRecentPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/recent`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
};

//FOR FUTURE IMPLEMENTATION(TODO: Add to the front end and the admin dashboard)
export const httpsFetchCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/blogs/post/${postId}/comments`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return [];
  }
};

export const httpsAddComment = async (postId, comment) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/blogs/post/${postId}/comments`,
      comment
    );
    return response.data;
  } catch (error) {
    console.error(`Error adding comment to post ${postId}:`, error);
    return null;
  }
};

export const httpsEditComment = async (commentId, comment) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/blogs/comments/${commentId}`,
      comment
    );
    return response.data;
  } catch (error) {
    console.error(`Error editing comment ${commentId}:`, error);
    return null;
  }
};

export const httpsDeleteComment = async (commentId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/blogs/comments/${commentId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting comment ${commentId}:`, error);
    return null;
  }
};

//ADMIN CRUD Requests (TODO: Add to the backend and the admin dashboard)
export const httpsCreatePost = async (post) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admin/dashboard/posts/edit/create`,
      post
    );
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};

export const httpsUpdatePost = async (id, post) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/admin/dashboard/posts/edit/${id}`,
      post
    );
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
};

export const httpsDeletePost = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/admin/dashboard/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    return null;
  }
};
