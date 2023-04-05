const express = require('express');

const {
  createPost,
  updatePost,
  deletePost,
} = require('../../models/admin/admin.model');

async function httpsCreatePost(req, res) {
  try {
    const post = await createPost(req.body);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating post' });
  }
}

async function httpsUpdatePost(req, res) {
  try {
    const postId = req.params.id;
    const post = await updatePost(postId, req.body);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating post' });
  }
}

async function httpsDeletePost(req, res) {
  try {
    const postId = req.params.id;
    const post = await deletePost(postId);
    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting post' });
  }
}

module.exports = {
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
};
