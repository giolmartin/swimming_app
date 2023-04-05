const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const categoryDB = mongoose.model('Category', categorySchema);
const tagDB = mongoose.model('Tag', tagSchema);

module.exports = {
  categoryDB,
  tagDB,
};
