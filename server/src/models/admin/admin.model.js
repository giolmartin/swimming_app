const blogsDB = require('../blog/blogs.mongo');
const { categoriesDB, tagsDB } = require('../blog/categoriesAndTags.mongo');

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

async function createTag(tag) {
  const newTag = await tagsDB.create(tag);
  return newTag;
}
async function createCategory(category) {
  const newCategory = await categoriesDB.create(category);
  return newCategory;
}
async function updateTag(tagId, tag) {
  const updatedTag = await tagsDB.findByIdAndUpdate(tagId, tag, {
    new: true,
  });
  return updatedTag;
}
async function updateCategory(categoryId, category) {
  const updatedCategory = await categoriesDB.findByIdAndUpdate(
    categoryId,
    category,
    {
      new: true,
    }
  );
  return updatedCategory;
}
async function deleteTag(tagId) {
  const deletedTag = await tagsDB.findByIdAndDelete(tagId);
  if (deletedTag)
    await blogsDB.updateMany({ tags: tagId }, { $pull: { tags: tagId } });
  return deletedTag;
}

async function deleteCategory(categoryId) {
  const deletedCategory = await categoriesDB.findByIdAndDelete(categoryId);
  if (deletedCategory)
    await blogsDB.updateMany(
      { categories: categoryId },
      { $pull: { categories: categoryId } }
    );
  return deletedCategory;
}
module.exports = {
  createPost,
  updatePost,
  deletePost,
  createTag,
  createCategory,
  updateTag,
  updateCategory,
  deleteTag,
  deleteCategory,
};
