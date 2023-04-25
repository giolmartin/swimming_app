const blogsDB = require('./blogs.mongo');
const commentsDB = require('./comments.mongo');
const { categoriesDB, tagsDB } = require('./categoriesAndTags.mongo');
const MOCK_POSTS = require('../../mockData/posts.data');
const {
  MOCK_CATEGORIES,
  MOCK_TAGS,
} = require('../../mockData/categories.data');

async function getAllPosts(skip, limit) {
  try {
    const posts = await blogsDB
      .find({}, { __v: 0 })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const totalPosts = await blogsDB.countDocuments();
    return { posts, totalPosts, error: null };
  } catch (error) {
    return { posts: null, totalPosts: null, error: { status: 500, message: 'Error Fetching Posts' } };
  }
}

const first = { title: 'Mastering the Freestyle Technique' };

async function loadPostData() {
  try {
    const firstPost = await findPost(first);
    if (firstPost) {
      console.log('Posts already loaded');
    } else {
      await loadCategoriesAndTags();
      console.log('Categories and Tags loaded');

      await addMockPosts();
      console.log('Posts loaded');
    }
  } catch (error) {
    console.error('Error loading post data:', error);
    throw error;
  }
}

async function loadCategoriesAndTags() {
  try {
    const mockCategories = MOCK_CATEGORIES.map((category) => {
      return {
        category: category,
      };
    });
    const mockTags = MOCK_TAGS.map((tag) => {
      return {
        tag: tag,
      };
    });
    await categoriesDB.insertMany(mockCategories);
    await tagsDB.insertMany(mockTags);
  } catch (error) {
    console.error('Error loading categories and tags:', error);
    throw error;
  }
}

async function findCategoryIds(categoryNames) {
  const categories = await Promise.all(
    categoryNames.map((categoryName) =>
      categoriesDB.findOne({ category: categoryName }).select('_id')
    )
  );
  return categories
    .filter((category) => category !== null)
    .map((category) => category._id);
}

async function findTagIds(tagNames) {
  const tags = await Promise.all(
    tagNames.map((tagName) => tagsDB.findOne({ tag: tagName }).select('_id'))
  );

  return tags.filter((tag) => tag !== null).map((tag) => tag._id);
}

async function addMockPosts() {
  const mockPosts = [];

  for (const post of MOCK_POSTS) {
    const categoryIds = await findCategoryIds(post.categories);
    const tagIds = await findTagIds(post.tags);

    mockPosts.push({
      ...post,
      comments: [],
      categories: categoryIds,
      tags: tagIds,
    });
  }

  await blogsDB.insertMany(mockPosts);
}

async function getCategories() {
  const categories = await categoriesDB.find({}, { __v: 0 });
  return categories;
}

async function getTags() {
  const tags = await tagsDB.find({}, { __v: 0 });
  return tags;
}

async function findPost(filter) {
  return await blogsDB.findOne(filter);
}

async function getPostById(id) {
  try {
    const postById = await blogsDB.findById(id);
    if (postById) {
      return { post: postById, error: null };
    } else {
      return { post: null, error: { status: 404, message: 'Post not found' } };
    }
  } catch (error) {
    return { post: null, error: { status: 400, message: 'Invalid Post Id' } };
  }
}
async function getCategoryIdByName(categoryName) {
  const category = await categoriesDB.findOne({ category: categoryName });
  return category ? category._id : null;
}

async function getPostsByCategory(category) {
  const categoryId = await getCategoryIdByName(category);
  if (!categoryId) {
    console.log('Error: Category not found');
    return [];
  }

  console.log(`getPostsByCategory: ${category}`);
  const postsCategory = await blogsDB.find({
    categories: { $in: [categoryId] },
  });
  console.log(`postsCategory: ${postsCategory}`);
  return postsCategory;
}

// Search using MongoDB's text index
async function searchPosts(keywords) {
  const searchResults = await blogsDB.find({
    $text: { $search: keywords },
  });
  return searchResults;
}

async function incrementPostViews(postId) {
  await blogsDB.findByIdAndUpdate(postId, { $inc: { views: 1 } });
}

async function getPopularPosts() {
  const popularPosts = await blogsDB.find().sort({ views: -1 }).limit(6);
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
    console.log('Post ID: ', postId);
    console.log('Author: ', author);
    console.log('Content: ', content);
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
  getPostById,
  getAllPosts,
  loadPostData,
  // findPost,
  // postExistsById,
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
