import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  // const navigate = useNavigate();
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

  const handleError = (navigate, status) => {
    navigate('/404');
  };

  const sendMail = async (formData) => {
    const response = await httpsSendContactEmail(formData);
    console.log('Response from server: ', response);
    return response;
  };

  const selectPost = async (id, navigate) => {
    const post = await httpsFetchPostById(id);
    if (post && Object.keys(post).length > 0) {
      setSelectedPost(post);
    } else {
      handleError(navigate, '/400');
    }
    return post;
  };

  const getPosts = async (navigate, page = 1, limit = 8) => {
    const { data, currentPage, totalPages } = await httpsFetchPosts(
      page,
      limit
    );
    if (data && data.length > 0) {
      setPosts(data);
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
    } else {
      navigate('/400');
    }
    return posts;
  };

  const filterPostsByCategory = async (category = 'all') => {
    if (category === 'all') {
      setFilteredPosts(posts);
      return posts;
    } else {
      const filtered = await httpsFetchPostsByCategory(category);
      if (filtered && filtered.length > 0) {
        setFilteredPosts(filtered);
      } else {
      }
      return filtered;
    }
  };

  const getSearchResults = async (keywords) => {
    const search = await httpsSearchPosts(keywords);
    if (search && search.length > 0) {
      setSearchResults(search);
    } else {
    }
    return search;
  };

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  const getCategories = async () => {
    const fetchCategories = await httpsFetchCategories();
    if (fetchCategories && fetchCategories.length > 0) {
      setCategories(fetchCategories);
    } else {
    }
    return fetchCategories;
  };

  const getTags = async () => {
    const fetchedTags = await httpsFetchTags();
    if (fetchedTags && fetchedTags.length > 0) {
      setTags(fetchedTags);
    } else {
    }
    return fetchedTags;
  };
  const getPopularPosts = async () => {
    const popularPosts = await httpsFetchPopularPosts();
    if (!popularPosts || popularPosts.length === 0) {
    }
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
    handleError,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
