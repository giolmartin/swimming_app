const express = require('express');

const {
  createPost,
  updatePost,
  deletePost,
  createTag,
  createCategory,
  updateTag,
  updateCategory,
  deleteTag,
  deleteCategory,
} = require('../../models/admin/admin.model');

async function httpsCreatePost(req, res) {
  try {
    const post = await createPost(req.body);
    console.log(`CREATE POST: ${post}`);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating post' });
  }
}

async function httpsUpdatePost(req, res) {
  try {
    const postId = req.params.id;
    // console.log(`POST ID: ${postId}`);
    const post = await updatePost(postId, req.body);
    // console.log(`POST: ${post}`);
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

async function httpsCreateTag(req, res) {
  try {
    const tag = await createTag(req.body);
    return res.status(200).json(tag);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating tag' });
  }
}
async function httpsCreateCategory(req, res) {
  try {
    console.log('Received category: ', req.body);
    const category = await createCategory(req.body);

    if (category) {
      return res.status(200).json(category);
    } else {
      return res.status(500).json({ message: 'Error creating category' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error creating category' });
  }
}

async function httpsUpdateTag(req, res) {
  try {
    const tagId = req.params.id;
    const tag = await updateTag(tagId, req.body);
    return res.status(200).json(tag);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating tag' });
  }
}
async function httpsUpdateCategory(req, res) {
  try {
    const categoryId = req.params.id;
    const category = await updateCategory(categoryId, req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating category' });
  }
}
async function httpsDeleteTag(req, res) {
  try {
    const tagId = req.params.id;
    const tag = await deleteTag(tagId);
    return res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting tag' });
  }
}
async function httpsDeleteCategory(req, res) {
  try {
    const categoryId = req.params.id;
    const category = await deleteCategory(categoryId);
    return res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting category' });
  }
}

module.exports = {
  httpsCreatePost,
  httpsUpdatePost,
  httpsDeletePost,
  httpsCreateTag,
  httpsCreateCategory,
  httpsUpdateTag,
  httpsUpdateCategory,
  httpsDeleteTag,
  httpsDeleteCategory,
};
