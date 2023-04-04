const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sectionTitle: String,
  contentType: {
    type: String,
    enum: ['text', 'image', 'video'],
    required: true,
  },
  content: String,
  imageUrl: String,
  videoUrl: String,
});

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    excerpt: String,
    postTitle: String,
    introduction: {
      type: String,
      required: true,
    },
    sections: [sectionSchema],
    conclusion: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    categories: [String],
    tags: [String],
    views: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const blogsDB = mongoose.model('Blog', blogSchema);

module.exports = blogsDB;
