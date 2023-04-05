const blogsDB = require('../blog/blogs.mongo');
const commentsDB = require('../blog/comments.mongo');
const { getCategories, getTags } = require('../blog/blogs.model');
const { getPagination } = require('../../services/query.service');

async function createPost(post) {
  const newPost = await blogsDB.create(post);
  return newPost;
}

async function updatePost(postId, post) {
  const updatedPost = await blogsDB.findByIdAndUpdate(postId, post, {
    new: true,
  });
  return updatedPost;
}

async function deletePost(postId) {
  const deletedPost = await blogsDB.findByIdAndDelete(postId);
  return deletedPost;
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
};
