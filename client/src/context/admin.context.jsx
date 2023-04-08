import { createContext, useContext, useState, useEffect } from 'react';
import {
  httpsCreateTag,
  httpsUpdateTag,
  httpsDeleteTag,
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
  httpsCreateCategory,
  httpsUpdateCategory,
  httpsDeleteCategory,
} from '../services/admin.requests.js';

import {
  httpsSearchPosts,
  httpsFetchPosts,
  httpsFetchCommentsByPostId,
  httpsDeleteComment,
  httpsAddComment,
  httpsFetchPostsByCategory,
  httpsFetchPostById,
  httpsFetchCategories,
  httpsFetchTags,
} from '../services/blog.requests.js';

const AdminContext = createContext({
  tags: [],
  posts: [],
  categories: [],

  selectedPost: {},
  selectPost: () => {},

  searchResults: [],
  updateSearchResults: () => {},

  filteredPosts: [],
  filterPostsByCategory: () => {},

  getTags: () => {},
  createTag: () => {},
  updateTag: () => {},
  deleteTag: () => {},

  getPosts: () => {},
  createPost: () => {},
  updatePost: () => {},
  deletePost: () => {},

  getCategories: () => {},
  createCategory: () => {},
  updateCategory: () => {},
  deleteCategory: () => {},
});

export const useAdminContext = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    const fetchData = async () => {
      const { data, currentPage, totalPages } = await httpsFetchPosts(
        page,
        limit
      );

      const fetchedCategories = await httpsFetchCategories();
      const fetchedTags = await httpsFetchTags();
      setCategories(fetchedCategories);
      setTags(fetchedTags);
      setPosts(data);
      setPage(currentPage);
      setTotalPages(totalPages);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(`Use Effect for selectedPost`, selectedPost);
  }, [selectedPost]);

  const getPosts = async (page, limit) => {
    const { data, currentPage, totalPages } = await httpsFetchPosts(
      page,
      limit
    );
    setPosts(data);
    setPage(currentPage);
    setTotalPages(totalPages);
    return posts;
  };

  const selectPost = async (id) => {
    const post = await httpsFetchPostById(id);
    setSelectedPost(post);
    // console.log(`Selected post: ${JSON.stringify(post)}`);
    return post;
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

  const createTag = async (tag) => {
    const newTag = await httpsCreateTag(tag);
    setTags([...tags, newTag]);
    return newTag;
  };

  const updateTag = async (tagId, tag) => {
    const updatedTag = await httpsUpdateTag(tagId, tag);
    setTags(tags.map((tag) => (tag._id === updatedTag._id ? updatedTag : tag)));
  };

  const deleteTag = async (tagId) => {
    await httpsDeleteTag(tagId);
    setTags(tags.filter((tag) => tag._id !== tagId));
  };

  const createPost = async (post) => {
    const newPost = await httpsCreatePost(post);
    setPosts([...posts, newPost]);
  };

  const updatePost = async (postId, post) => {
    console.log(`UPDATE POST CONTEXT `, post);
    console.log(`UPDATE POST CONTEXT `, postId);
    const updatedPost = await httpsUpdatePost(postId, post);
    setPosts(
      posts.map((post) => (post._id === updatedPost._id ? updatedPost : post))
    );
  };

  const deletePost = async (postId) => {
    await httpsDeletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  };

  const createCategory = async (category) => {
    const newCategory = await httpsCreateCategory(category);
    setCategories([...categories, newCategory]);
    return newCategory;
  };

  const updateCategory = async (categoryId, category) => {
    const updatedCategory = await httpsUpdateCategory(categoryId, category);
    setCategories(
      categories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    );
  };

  const deleteCategory = async (categoryId) => {
    await httpsDeleteCategory(categoryId);
    setCategories(categories.filter((category) => category._id !== categoryId));
  };

  const getTags = async () => {
    const fetchedTags = await httpsFetchTags();
    console.log(fetchedTags);
    setTags(fetchedTags);
    return fetchedTags;
  };

  const getCategories = async () => {
    const fetchedCategories = await httpsFetchCategories();
    console.log(`GET CATEGORIES CONTEXT `, fetchedCategories);
    setCategories(fetchedCategories);
    return fetchedCategories;
  };

  const updateSearchResults = async (results) => {
    setSearchResults(results);
  };

  const value = {
    tags,
    posts,
    categories,
    selectedPost,
    searchResults,
    filteredPosts,

    selectPost,
    filterPostsByCategory,
    updateSearchResults,
    getSearchResults,

    getTags,
    createTag,
    updateTag,
    deleteTag,

    getPosts,
    createPost,
    updatePost,
    deletePost,

    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };

  return (
    <AdminContext.Provider value={value}>{children} </AdminContext.Provider>
  );
};
