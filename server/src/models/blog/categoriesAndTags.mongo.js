const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const tagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
});

const categoriesDB = mongoose.model('Category', categorySchema);
const tagsDB = mongoose.model('Tag', tagSchema);

module.exports = {
  categoriesDB,
  tagsDB,
};
