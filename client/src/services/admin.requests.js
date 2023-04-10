import axios from 'axios';
const BASE_URL = process.env.API_URL || 'https://localhost:8000/v1';

//ADMIN CRUD Requests

export const httpsUploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post(`${BASE_URL}/admin/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (response.status === 200) {
      console.log('Image uploaded successfully:', response.data);
      return response.data;
    } else {
      console.error('Error uploading image:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export const httpsCreatePost = async (newpost) => {
  try {
    console.log('Creating post:', newpost);
    const response = await axios.post(`${BASE_URL}/admin/posts`, newpost);
    console.log(`httpsCreatePost: ${response.data}`);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};

export const httpsUpdatePost = async (PostId, post) => {
  try {
    console.log('Updating post:', post);
    console.log('Updating PostId:', PostId);
    const response = await axios.put(`${BASE_URL}/admin/posts/${PostId}`, post);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
};

export const httpsDeletePost = async (PostId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/posts/${PostId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    return null;
  }
};

//TAGS AND CATEGORIES CRUD Requests
export const httpsCreateTag = async (tag) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/tags`, tag);

    if (response.status === 200) {
      console.log('Received response:', response.data);
      return response.data;
    } else {
      console.error('Error creating tag, status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error creating tag:', error);
    return null;
  }
};

export const httpsCreateCategory = async (category) => {
  try {
    console.log('Creating Category', category);
    const response = await axios.post(`${BASE_URL}/admin/categories`, category);

    if (response.status === 200) {
      console.log('Received response:', response.data);
      return response.data;
    } else {
      console.error('Error creating category, status:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error creating category:', error);
    return null;
  }
};

export const httpsUpdateTag = async (id, tag) => {
  try {
    const response = await axios.put(`${BASE_URL}/admin/tags/${id}`, tag);
    return response.data;
  } catch (error) {
    console.error('Error updating tag:', error);
    return null;
  }
};
export const httpsUpdateCategory = async (id, category) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/admin/categories/${id}`,
      category
    );
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    return null;
  }
};

export const httpsDeleteTag = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/tags/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting tag:', error);
    return null;
  }
};

export const httpsDeleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    return null;
  }
};
