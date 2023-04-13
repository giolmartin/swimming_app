const express = require('express');

const blogsRouter = require('./blogs/blogs.router');
const adminRouter = require('./admin/admin.router');
const workoutRouter = require('../WorkoutLogic/routes/workout.router');

const api = express.Router();

api.use('/blogs', blogsRouter);
api.use('/admin', adminRouter);
api.use('/workout', workoutRouter);

module.exports = api;
