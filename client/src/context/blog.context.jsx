import { createContext, useContext, useState, useEffect } from 'react';
import {
  httpsFetchPostById,
  httpsFetchPostsByCategory,
  httpsFetchPosts,
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
  httpsFetchCategories,
  httpsFetchTags,
  httpsFetchPopularPosts,
  httpsFetchRecentPosts,
} from '../services/blog.requests';
import { postPrototype } from '../data/prototypes.data';

const BlogContext = createContext({
  posts: [],

  selectedPost: null,
  selectPost: () => {},

  filteredPosts: [],
  filterPostsByCategory: () => {},

  blankPost: postPrototype,
  setBlankPost: () => {},

  categories: [],
  tags: [],

  //Admin CRUD operations
  updatePost: () => {},
  deletePost: () => {},
  createPost: () => {},
});

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [popularPosts, setPopularPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [blankPost, setBlankPost] = useState(postPrototype);

  // For fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      const data = await httpsFetchPosts();
      const categories = await httpsFetchCategories();
      const tags = await httpsFetchTags();
      const popularPosts = await httpsFetchPopularPosts();
      const recentPosts = await httpsFetchRecentPosts();
      // const
      setCategories(categories);
      setTags(tags);
      setPopularPosts(popularPosts);
      // setRecentPosts(recentPosts);
      setPosts(data);
    };

    fetchData();
  }, []);

  const selectPost = async (id) => {
    console.log('Selected Post: ', id);
    const post = await httpsFetchPostById(id);
    setSelectedPost(post);
    console.log(selectedPost);
  };

  const getPosts = async () => {
    const posts = await httpsFetchPosts();
    setPosts(posts);
    return posts;
  };

  const filterPostsByCategory = async (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = await httpsFetchPostsByCategory(category);
      setFilteredPosts(filtered);
    }
  };

  const getCategories = async () => {
    const fetchCategories = await httpsFetchCategories();
    setCategories(fetchCategories);
    return fetchCategories;
  };

  const getTags = async () => {
    const fetchedTags = await httpsFetchTags();
    setTags(fetchedTags);
    return fetchedTags;
  };
  const getPopularPosts = async () => {
    const popularPosts = await httpsFetchPopularPosts();
    return popularPosts;
  };

  const getRecentPosts = async () => {
    const recentPosts = await httpsFetchRecentPosts();
    return recentPosts;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  //ADMIN CRUD FUNCTIONS
  //Function to call the API with request call(TODO: Implement the  function once the API is ready)
  const updatePost = async (postId, updatedPost) => {
    //httpsUpdatePost(postId, updatedPost);
    console.log('Post Updated: ', postId, updatedPost);
  };

  // TODO: Implement the  function once the API is ready
  const deletePost = async (postId) => {
    //httpsDeletePost(postId);
    console.log('Post Deleted: ', postId);
  };
  // TODO: Implement the  function once the API is ready
  const createPost = async (newPost) => {
    //httpsCreatePost(newPost);
    console.log('Post Created: ', newPost);
  };

  const value = {
    posts,
    setPosts,
    selectedPost,
    selectPost,
    filteredPosts,
    filterPostsByCategory,
    blankPost,
    updatePost,
    deletePost,
    createPost,
    getCategories,
    getTags,

    getPopularPosts,
    getRecentPosts,
    getPosts,
    formatDate,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
