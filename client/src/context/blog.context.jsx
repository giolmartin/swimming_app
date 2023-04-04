import { createContext, useContext, useState, useEffect } from 'react';
import {
  httpsFetchPostById,
  httpsFetchPostsByCategory,
  httpsFetchPosts,
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
  httpsFetchCommentsByPostId,
  httpsAddComment,
  httpsEditComment,
  httpsDeleteComment,
  httpsSearchPosts,
  httpsFetchCategories,
  httpsFetchTags,
  httpsFetchPopularPosts,
  httpsFetchRecentPosts,
} from '../services/blog.requests';
import { postPrototype } from '../data/prototypes.data';

const BlogContext = createContext({
  posts: [],
  popularPosts: [],

  selectedPost: {},
  selectPost: () => {},

  filteredPosts: [],
  filterPostsByCategory: () => {},

  searchResults: [],
  updateSearchResults: () => {},

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
  const [posts, setPosts] = useState([]);

  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [recentPosts, setRecentPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});

  //Limited to 6 on the API blogs Model.
  const [popularPosts, setPopularPosts] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const [blankPost, setBlankPost] = useState(postPrototype);

  // For fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      const data = await httpsFetchPosts();
      const categories = await httpsFetchCategories();
      const tags = await httpsFetchTags();
      const popularPosts = await httpsFetchPopularPosts();
      // const recentPosts = await httpsFetchRecentPosts(); // may not be needed since posts are already sorted by date
      setCategories(categories);
      setTags(tags);
      setPopularPosts(popularPosts);
      // setRecentPosts(recentPosts);
      setPosts(data);
    };

    fetchData();
  }, []);

  const selectPost = async (id) => {
    const post = await httpsFetchPostById(id);
    setSelectedPost(post);
    return post;
  };

  const getPosts = async () => {
    const posts = await httpsFetchPosts();
    setPosts(posts);
    return posts;
  };

  const filterPostsByCategory = async (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
      return posts;
    } else {
      const filtered = await httpsFetchPostsByCategory(category);
      setFilteredPosts(filtered);
      return filtered;
    }
  };

  const getSearchResults = async (keywords) => {
    const search = await httpsSearchPosts(keywords);
    setSearchResults(search);
    return search;
  };

  const updateSearchResults = (results) => {
    setSearchResults(results);
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

  // const getRecentPosts = async () => {
  //   const recentPosts = await httpsFetchRecentPosts();
  //   return recentPosts;
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toDateString()}`;
  };

  //COMMENTS FUNCTIONS
  const getCommentsByPostId = async (postId) => {
    const comments = await httpsFetchCommentsByPostId(postId);
    return comments;
  };

  const addComment = async (postId, comment) => {
    const newComment = await httpsAddComment(postId, comment);
    return newComment;
  };

  const updateComment = async (comment) => {
    const updatedComment = await httpsEditComment(comment);
    return updatedComment;
  };

  const deleteComment = async (commentId) => {
    await httpsDeleteComment(commentId);
    console.log(`Deleted Comment: ${commentId}`);
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
    getPosts,

    popularPosts,
    getPopularPosts,
    // getRecentPosts,

    selectedPost,
    selectPost,
    blankPost,

    filteredPosts,
    filterPostsByCategory,

    getCommentsByPostId,
    addComment,
    updateComment,
    deleteComment,

    getCategories,
    getTags,
    tags,
    categories,

    getSearchResults,
    searchResults,
    updateSearchResults,

    formatDate,

    updatePost,
    deletePost,
    createPost,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
