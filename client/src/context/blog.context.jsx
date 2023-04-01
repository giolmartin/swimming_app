import { createContext, useContext, useState, useEffect } from 'react';
import {
  httpsFetchPostById,
  httpsFetchPostsByCategory,
  httpsFetchPosts,
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
} from '../services/blog.requests';
import { postPrototype } from '../data/prototypes.data';
import { blogPostsMock } from '../data/blog.data';
import { mockCategories, mockTags } from '../data/categories.data';
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
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [blankPost, setBlankPost] = useState(postPrototype);
  const [categories, setCategories] = useState(mockCategories);
  const [tags, setTags] = useState(mockTags);
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
      const data = await httpsFetchPosts(); // Use fetchBlogs function to get blog data
      console.log(data);
      setPosts(data);
    };

    fetchData();
  }, []);

  const selectPost = async (id) => {
    // const post = await httpsFetchPostById(id);
    // setSelectedPost(post);

    return selectedPost;
  };

  const getPosts = () => {
    // const posts = await httpsFetchPosts();
    // setPosts(posts);
    // console.log(posts);
    return posts;
  };

  useEffect(() => {
    setSelectedPost(posts[1]);
  }, [posts]);

  const filterPostsByCategory = async (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = await httpsFetchPostsByCategory(category);
      setFilteredPosts(filtered);
    }
  };

  // TODO:Create the httpsFetchCategories function
  //FIXME: Make sure categories are fetched from the server
  const getCategories = () => {
    // const categories = await httpsFetchCategories();
    setCategories(mockCategories);
    return categories;
  };

  // TODO: Create the httpsFetchTags function
  //FIXME: Make sure tags are fetched from the server
  const getTags = () => {
    // const tags = await httpsFetchTags();
    setTags(mockTags);
    return tags;
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
    getPosts,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
