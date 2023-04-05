const express = require('express');

const {
  httpsFetchPosts,
  httpsFetchPostById,
  httpsFetchPostsByCategory,
  httpsFetchCategories,
  httpsFetchTags,
  httpsSearchPosts,
  httpsFetchPopularPosts,
  httpsFetchRecentPosts,
  httpsGetCommentByPostId,
  httpsAddCommentToPost,
  httpsUpdateComment,
  httpsDeleteComment,
} = require('../blogs/blogs.controller');

const {
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
} = require('./admin.controller');

const adminRouter = express.Router();

// Posts
adminRouter.get('/posts', httpsFetchPosts);
adminRouter.get('/posts/search', httpsSearchPosts);
adminRouter.get('/posts/recent', httpsFetchRecentPosts);
adminRouter.get('/posts/popular', httpsFetchPopularPosts);
adminRouter.get('/posts/category/:category', httpsFetchPostsByCategory);

//CRUD Posts
adminRouter.post('/posts', httpsCreatePost);
adminRouter.put('/posts/:id', httpsUpdatePost);
adminRouter.delete('/posts/:id', httpsDeletePost);

// Comments
adminRouter.post('/posts/post/:id/comments', httpsAddCommentToPost);
adminRouter.get('/posts/post/:id/comments', httpsGetCommentByPostId);
adminRouter.put('/posts/comments/:commentId', httpsUpdateComment);
adminRouter.delete('/posts/comments/:commentId', httpsDeleteComment);

//Fetch Post by ID
adminRouter.get('/posts/post/:id', httpsFetchPostById);

// Categories and Tags
adminRouter.get('/posts/tags', httpsFetchTags);
adminRouter.get('/posts/categories', httpsFetchCategories);

module.exports = adminRouter;