import axios from 'axios';
import { blogPostsMock } from '../data/blog.data';
const BASE_URL = process.env.API_URL || 'v1';

export const fetchBlogs = async () => {
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

export const fetchBlogById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    return null;
  }
};

export const fetchBlogsByCategory = async (category) => {
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
