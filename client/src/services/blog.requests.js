import axios from 'axios';
import { blogPostsMock } from '../data/blog.data';
const BASE_URL = process.env.API_URL || 'v1';

export const httpsFetchPosts = async () => {
  try {
    // const response = await axios.get(`${BASE_URL}/blogs`);
    // return response.data;
    //----------------DEV ONLY----------------
    return blogPostsMock;
    //----------------------------------------
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const httpsFetchPostById = async (id) => {
  try {
    // const response = await axios.get(`${BASE_URL}/blogs/${id}`);
    // return response.data;
    console.log(blogPostsMock[0]);
    //----------------DEV ONLY----------------
    return blogPostsMock[0];
    //----------------------------------------
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    return null;
  }
};

export const httpsFetchPostsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs`, {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching blogs in category ${category}:`, error);
    return [];
  }
};

//CRUD Requests
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

export const httpsFetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/dashboard/posts/edit`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
