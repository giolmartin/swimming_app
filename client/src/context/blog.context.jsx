import { createContext, useContext, useState, useEffect } from 'react';
import {
  fetchPostById,
  fetchPostsByCategory,
  fetchPosts,
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
  //   // setSelectedPost(blogPostsMock[0]);
  //   console.log(selectedPost);
  // }, []);
  // console.log(posts);
  // //------------------------------------
  // For fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts(); // Use fetchBlogs function to get blog data
      console.log(data);
      setPosts(data);
    };

    fetchData();
  }, []);

  const selectPost = async (id) => {
    // const post = await fetchPostById(id);
    // setSelectedPost(post);
    setSelectedPost(posts[0]);
  };

  // useEffect(() => {
  //   setSelectedPost(posts[0]);
  // }, [posts]);

  const filterPostsByCategory = async (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = await fetchPostsByCategory(category);
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
