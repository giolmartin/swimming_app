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
import { categories1 } from '../data/categories.data';
const BlogContext = createContext({
  posts: [],

  selectedPost: null,
  selectPost: () => {},

  filteredPosts: [],
  filterPostsByCategory: () => {},

  blankPost: postPrototype,
  setBlankPost: () => {},

  //Admin CRUD operations
  updatePost: () => {},
  deletePost: () => {},
  createPost: () => {},
});

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [blankPost, setBlankPost] = useState(postPrototype);
  const [categories, setCategories] = useState(categories1);
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
    setSelectedPost(posts[0]);
  };

  // useEffect(() => {
  //   setSelectedPost(posts[0]);
  // }, [posts]);

  const filterPostsByCategory = async (category) => {
    if (category === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = await httpsFetchPostsByCategory(category);
      setFilteredPosts(filtered);
    }
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
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
