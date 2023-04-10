const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
  httpsCreateTag,
  httpsCreateCategory,
  httpsUpdateTag,
  httpsUpdateCategory,
  httpsDeleteTag,
  httpsDeleteCategory,
  httpsUploadImage,
  httpsFetchAllBlogImages,
} = require('./admin.controller');

const adminRouter = express.Router();

// Posts
adminRouter.get('/posts', httpsFetchPosts);
adminRouter.get('/posts/search', httpsSearchPosts);
adminRouter.get('/posts/popular', httpsFetchPopularPosts);
adminRouter.get('/posts/category/:category', httpsFetchPostsByCategory);

//CRUD Posts
adminRouter.post('/posts', httpsCreatePost);
adminRouter.put('/posts/:id', httpsUpdatePost);
adminRouter.delete('/posts/:id', httpsDeletePost);

// Image Management
adminRouter.post('/images/upload', httpsUploadImage);
adminRouter.get('/images/fetch', httpsFetchAllBlogImages);

// Comments
adminRouter.post('/posts/post/:id/comments', httpsAddCommentToPost);
adminRouter.get('/posts/post/:id/comments', httpsGetCommentByPostId);
adminRouter.put('/posts/comments/:commentId', httpsUpdateComment);
adminRouter.delete('/posts/comments/:commentId', httpsDeleteComment);

//Fetch Post by ID
adminRouter.get('/posts/post/:id', httpsFetchPostById);

//This exist on the blogs.controller.js already
// adminRouter.get('/posts/tags', httpsFetchTags);
// adminRouter.get('/posts/categories', httpsFetchCategories);

// Categories and Tags CRUD
adminRouter.post('/tags', httpsCreateTag);
adminRouter.post('/categories', httpsCreateCategory);
adminRouter.put('/tags/:id', httpsUpdateTag);
adminRouter.put('/categories/:id', httpsUpdateCategory);
adminRouter.delete('/tags/:id', httpsDeleteTag);
adminRouter.delete('/categories/:id', httpsDeleteCategory);

module.exports = adminRouter;
