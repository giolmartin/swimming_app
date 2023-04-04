const axios = require('axios');

const blogsDB = require('./blogs.mongo');
const commentsDB = require('./comments.mongo');
const MOCK_POSTS = require('../mockData/posts.data');

async function getAllPosts() {
  const posts = await blogsDB.find({}).sort({ createdAt: -1 });
  return posts;
}

const first = { title: 'Mastering the Freestyle Technique' };

async function loadPostData() {
  const firstPost = await findPost(first);
  if (firstPost) {
    console.log('Posts already loaded');
    return;
  } else {
    await addMockPosts();
  }
}

async function addMockPosts() {
  const mockPosts = MOCK_POSTS.map((post) => {
    return {
      ...post,
      comments: [],
    };
  });
  await blogsDB.insertMany(mockPosts);
}

async function getCategories() {
  const categories = await blogsDB.aggregate([
    { $unwind: '$categories' },
    { $group: { _id: '$categories' } },
    { $sort: { _id: 1 } },
  ]);
  return categories.map((c) => c._id);
}

async function getTags() {
  const tags = await blogsDB.aggregate([
    { $unwind: '$tags' },
    { $group: { _id: '$tags' } },
    { $sort: { _id: 1 } },
  ]);
  return tags.map((t) => t._id);
}

async function findPost(filter) {
  return await blogsDB.findOne(filter);
}

async function postExistsById(postId) {
  return await findPost({ _id: postId });
}

async function getPostById(id) {
  const postById = await blogsDB.findById(id);
  console.log('Server, ', id);
  console.log('Server, ', postById);
  return postById;
}

async function getPostsByCategory(category) {
  const postsCategory = await blogsDB.find({ category: category });
  return postsCategory;
}

async function searchPosts(keywords) {
  const searchResults = await blogsDb.find({
    $or: [
      { title: { $regex: keywords, $options: 'i' } },
      { subtitle: { $regex: keywords, $options: 'i' } },
      { author: { $regex: keywords, $options: 'i' } },
      { categories: { $regex: keywords, $options: 'i' } },
      { tags: { $regex: keywords, $options: 'i' } },
    ],
  });
  return searchResults;
}

async function incrementPostViews(postId) {
  await blogsDB.findByIdAndUpdate(postId, { $inc: { views: 1 } });
}

async function getPopularPosts() {
  const popularPosts = await blogsDB.find().sort({ views: -1 }).limit(5);
  return popularPosts;
}
async function getRecentPosts() {
  const recentPosts = await blogsDB.find().sort({ createdAt: -1 }).limit(10);
  return recentPosts;
}

async function getCommentByPostId(postId) {
  const blogPost = await blogsDB.findById(postId).populate('comments');
  return blogPost.comments;
}

async function addCommentToPost(postId, author, content) {
  try {
    const newComment = new commentsDB({
      author,
      content,
      post: postId,
    });

    await newComment.save();

    const blogPost = await blogsDB.findById(postId);
    blogPost.comments.push(newComment);
    await blogPost.save();

    return newComment;
  } catch (error) {
    return res.status(500).json({ message: 'Error Adding Message' });
  }
}

async function updateComment(commentId, content) {
  try {
    console.log('ID: ', commentId);
    console.log('Content: ', content);
    const updatedComment = await commentsDB.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );
    console.log(updatedComment);
    return updatedComment;
  } catch (error) {
    return res.status(500).json({ message: 'Error Updating Message' });
  }
}

async function deleteComment(commentId) {
  try {
    await commentsDB.findByIdAndDelete(commentId);
  } catch (error) {
    return res.status(500).json({ message: 'Error Deleting Message' });
  }
}

module.exports = {
  getAllPosts,
  loadPostData,
  findPost,
  postExistsById,
  getPostById,
  getPostsByCategory,
  searchPosts,
  getPopularPosts,
  getRecentPosts,
  getCommentByPostId,
  addCommentToPost,
  updateComment,
  deleteComment,
  incrementPostViews,
  getCategories,
  getTags,
};
