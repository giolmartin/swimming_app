import { createContext, useContext, useState, useEffect } from 'react';
import {
  httpsFetchPostById,
  httpsFetchPostsByCategory,
  httpsFetchPosts,
  httpsFetchCommentsByPostId,
  httpsAddComment,
  httpsEditComment,
  httpsDeleteComment,
  httpsSearchPosts,
  httpsFetchCategories,
  httpsFetchTags,
  httpsFetchPopularPosts,
  httpsSendContactEmail,
} from '../services/blog.requests';

const BlogContext = createContext({
  posts: [],
  tags: [],
  categories: [],
  popularPosts: [],

  selectedPost: {},
  selectPost: () => {},

  filteredPosts: [],
  filterPostsByCategory: () => {},

  searchResults: [],
  updateSearchResults: () => {},

  sendMail: () => {},
});

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});

  //Limited to 6 on the API blogs Model, used on the Features section of the homepage
  const [popularPosts, setPopularPosts] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // For fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      const { data, currentPage, totalPages } = await httpsFetchPosts();
      const categories = await httpsFetchCategories();
      const tags = await httpsFetchTags();
      const popularPosts = await httpsFetchPopularPosts();
      setCategories(categories);
      setTags(tags);
      // console.log(`Tags: ${tags}`);
      // console.log(`Categories: ${categories}`);
      setPopularPosts(popularPosts);
      setPosts(data);
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
      // console.log(`Current page: ${currentPage}`);
      // console.log(`Total pages: ${totalPages}`);
    };

    fetchData();
  }, []);

  const sendMail = async (formData) => {
    const response = await httpsSendContactEmail(formData);
    console.log('Response from server: ', response);
    return response;
  };
  const selectPost = async (id) => {
    const post = await httpsFetchPostById(id);
    setSelectedPost(post);
    return post;
  };

  const getPosts = async (page = 1, limit = 4) => {
    const { data, currentPage, totalPages } = await httpsFetchPosts(
      page,
      limit
    );
    setPosts(data);
    setCurrentPage(currentPage);
    setTotalPages(totalPages);
    return posts;
  };

  const filterPostsByCategory = async (category = 'all') => {
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

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      getPosts(newPage);
      setCurrentPage(newPage);
    }
  };

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

  const value = {
    posts,
    setPosts,
    getPosts,

    popularPosts,
    getPopularPosts,

    selectedPost,
    selectPost,

    filteredPosts,
    filterPostsByCategory,

    currentPage,
    totalPages,
    handlePageChange,

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

    sendMail,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
