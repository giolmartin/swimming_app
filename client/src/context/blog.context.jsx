import { createContext, useContext, useState, useEffect } from 'react';
import {
  fetchBlogs,
  fetchBlogById,
  fetchBlogsByCategory,
} from '../services/blog.requests';
import { blogPostsMock } from '../data/blog.data';
const BlogContext = createContext({
  posts: [],

  selectedPost: null,
  selectPost: () => {},

  filteredPosts: [],
  filterPostsByCategory: () => {},
});

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  //------------DEV ONLY----------------
  // useEffect(() => {
  //   console.log('fetching posts');
  //   setPosts(blogPostsMock);
  // }, []);
  // //------------------------------------
  // For fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogs(); // Use fetchBlogs function to get blog data
      setPosts(data);
    };

    fetchData();
  }, []);

  const selectPost = async (id) => {
    const post = await fetchBlogById(id);
    setSelectedPost(post);
  };

  // useEffect(() => {
  //   setFilteredPosts(posts);
  // }, [posts]);

  const filterPostsByCategory = async (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = await fetchBlogsByCategory(category);
      setFilteredPosts(filtered);
    }
  };

  const value = {
    posts,
    setPosts,
    selectedPost,
    selectPost,
    filteredPosts,
    filterPostsByCategory,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
