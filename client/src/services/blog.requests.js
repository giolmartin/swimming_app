import axios from 'axios';
const BASE_URL = process.env.API_URL || 'https://localhost:8000/v1';

//TODO: Testing required
//Blog requests

export const httpsSendContactEmail = async (formData) => {
  try {
    console.log('Sending message...');
    console.log(`Form data: ${JSON.stringify(formData)}`);
    const response = await axios.post(`${BASE_URL}/blogs/contact`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      console.log('Message Sent 200');
      return { isSuccessful: true, message: 'Message sent successfully' };
    } else {
      console.error(`Error submitting form: ${response.statusText}`);
      console.log('Message Not Sent', response.statusText);
      return { isSuccessful: false, message: 'Message not sent' };
    }
  } catch (error) {
    console.error(`Error submitting form: ${error.message}`);
    console.log('Message Not Sent');
    return { isSuccessful: false, message: 'Message not sent' };
  }
};

export const httpsFetchPosts = async (page = 1, limit = 8) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs`, {
      params: { page, limit },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const httpsFetchPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/blogs/post/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error fetching post: ${response.status}`);
    }
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
    console.error('Error fetching tags:', error);
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

//Comment requests
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
