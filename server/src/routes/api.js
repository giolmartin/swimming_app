const express = require('express');

const blogsRouter = require('./blogs/blogs.router');

const api = express.Router();

api.use('/blogs', blogsRouter);

module.exports = api;
