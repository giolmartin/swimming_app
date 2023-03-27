import { createContext, useContext, useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('fetching posts');
    setPosts(blogPostsMock);
  }, []);

  const selectPost = (post) => {
    console.log(post);
    setSelectedPost(post);
  };

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const filterPostsByCategory = (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.category === category);
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
