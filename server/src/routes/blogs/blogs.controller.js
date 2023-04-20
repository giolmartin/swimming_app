const express = require('express');

const {
  getAllPosts,
  getCategories,
  getTags,
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
  sendMail,
} = require('../../models/blog/blogs.model');

const { getPagination } = require('../../services/query.service');

async function httpsSendContactEmail(req, res) {
  const { name, email, message } = req.body;
  console.log(`httpsSendContactEmail: ${name}, ${email}, ${message}`);

  //Find a way to send email
  try {
    const contact = await sendMail(name, email, message);
    console.log(`CREATE POST: ${post}`);
    return res.status(200).json(post);
  } catch {}
}

async function httpsFetchPosts(req, res) {
  const { skip, limit } = getPagination(req.query);
  console.log(`httpsFetchPosts: ${skip}, ${limit}`);
  try {
    const { posts, totalPosts } = await getAllPosts(skip, limit);
    console.log(`Posts : ${posts.length},  limit: ${limit}`);
    return res.status(200).json({
      currentPage: limit === 0 ? 1 : Math.ceil(skip / limit) + 1,
      totalPages: limit === 0 ? 1 : Math.ceil(totalPosts / limit),
      data: posts,
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error Fetching Posts' });
  }
}

//TODO: Add pagination
//TODO: Add conditional to not increment views if Admin is the user

async function httpsFetchPostById(req, res) {
  try {
    const postId = req.params.id;
    const post = await getPostById(postId);

    await incrementPostViews(postId);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error Fetching Post' });
  }
}

async function httpsFetchPostsByCategory(req, res) {
  const category = req.params.category;
  console.log(`httpsFetchPostsByCategory: ${category}`);
  const posts = await getPostsByCategory(category);
  console.log(posts);
  return res.status(200).json(posts);
}

async function httpsSearchPosts(req, res) {
  const keywords = req.query.keywords;
  const posts = await searchPosts(keywords);
  return res.status(200).json(posts);
}

async function httpsFetchCategories(req, res) {
  const categories = await getCategories();
  return res.status(200).json(categories);
}
async function httpsFetchTags(req, res) {
  const tags = await getTags();
  return res.status(200).json(tags);
}

async function httpsFetchPopularPosts(req, res) {
  const posts = await getPopularPosts();
  return res.status(200).json(posts);
}

async function httpsFetchRecentPosts(req, res) {
  const posts = await getRecentPosts();
  return res.status(200).json(posts);
}

//COMMENT RELATED FUNCTIONS

async function httpsGetCommentByPostId(req, res) {
  const postId = req.params.id;
  const comments = await getCommentByPostId(postId);
  return res.status(200).json(comments);
}

async function httpsAddCommentToPost(req, res) {
  const postId = req.params.id;
  const { author, content } = req.body;
  const newComment = await addCommentToPost(postId, author, content);
  return res.status(200).json(newComment);
}

async function httpsUpdateComment(req, res) {
  const commentId = req.params.commentId;
  console.log('ID: ', commentId);
  const { content } = req.body;
  const updatedComment = await updateComment(commentId, content);
  return res.status(200).json(updatedComment);
}

async function httpsDeleteComment(req, res) {
  const commentId = req.params.commentId;
  await deleteComment(commentId);
  return res.status(200).json({ message: 'Comment deleted' });
}

module.exports = {
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
  httpsSendContactEmail,
};
