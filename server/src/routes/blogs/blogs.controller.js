const express = require('express');

const nodemailer = require('nodemailer');

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

require('dotenv').config();

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

const { getPagination } = require('../../services/query.service');

async function httpsSendContactEmail(req, res) {
  console.log('httpsSendContactEmail');
  const { name, email, message } = req.body;
  console.log(`httpsSendContactEmail: ${name}, ${email}, ${message}`);

  try {
    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER,
      subject: 'New Message from Contact Form',
      text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
    };

    //Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Message Sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Error sending email' });
  }
}

async function httpsFetchPosts(req, res) {
  try {
    const { skip, limit } = getPagination(req.query);
    const { posts, totalPosts, error } = await getAllPosts(skip, limit);

    if (error) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(200).json({
      currentPage: limit === 0 ? 1 : Math.ceil(skip / limit) + 1,
      totalPages: limit === 0 ? 1 : Math.ceil(totalPosts / limit),
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error Fetching Posts' });
  }
}

async function httpsFetchPostById(req, res) {
  try {
    const postId = req.params.id;
    const { post, error } = await getPostById(postId);

    if (error) {
      return res.status(error.status).json({ message: error.message });
    }
    await incrementPostViews(postId);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Error Fetching Post' });
  }
}

async function httpsFetchPostsByCategory(req, res) {
  try {
    const category = req.params.category;
    console.log(`httpsFetchPostsByCategory: ${category}`);
    const posts = await getPostsByCategory(category);
    console.log(posts);
    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error fetching posts by category' });
  }
}

async function httpsSearchPosts(req, res) {
  try {
    const keywords = req.query.keywords;
    const posts = await searchPosts(keywords);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Error searching posts' });
  }
}

async function httpsFetchCategories(req, res) {
  try {
    const categories = await getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching categories' });
  }
}

async function httpsFetchTags(req, res) {
  try {
    const tags = await getTags();
    return res.status(200).json(tags);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching tags' });
  }
}

async function httpsFetchPopularPosts(req, res) {
  try {
    const posts = await getPopularPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching popular posts' });
  }
}

async function httpsFetchRecentPosts(req, res) {
  try {
    const posts = await getRecentPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching recent posts' });
  }
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
  httpsFetchPopularPosts,
  httpsFetchCategories,
  httpsFetchTags,
  httpsSearchPosts,
  httpsFetchRecentPosts,
  httpsGetCommentByPostId,
  httpsAddCommentToPost,
  httpsUpdateComment,
  httpsDeleteComment,
  httpsSendContactEmail,
};
