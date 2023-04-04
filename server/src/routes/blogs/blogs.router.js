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
} = require('./blogs.controller');

const blogsRouter = express.Router();

// Posts
blogsRouter.get('/', httpsFetchPosts);
blogsRouter.get('/search', httpsSearchPosts);
blogsRouter.get('/recent', httpsFetchRecentPosts);
blogsRouter.get('/popular', httpsFetchPopularPosts);
blogsRouter.get('/category/:category', httpsFetchPostsByCategory);

// Comments
blogsRouter.post('/post/:id/comments', httpsAddCommentToPost);
blogsRouter.get('/post/:id/comments', httpsGetCommentByPostId);
blogsRouter.put('/comments/:commentId', httpsUpdateComment);
blogsRouter.delete('/comments/:commentId', httpsDeleteComment);

//Fetch Post by ID
blogsRouter.get('/post/:id', httpsFetchPostById);

// Categories and Tags
blogsRouter.get('/tags', httpsFetchTags);
blogsRouter.get('/categories', httpsFetchCategories);
module.exports = blogsRouter;
