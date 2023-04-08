import React, { useState, useEffect } from 'react';

import { useAdminContext } from '../../../context/admin.context';

import {
  Container,
  Column,
  Title,
  ItemList,
  Item,
  Button,
  Input,
} from './adminCategories.styles';

const AdminCategories = () => {
  //TODO: If a category is removed from the database, remove it from all posts that have it.
  //TODO: If a tag is removed from the database, remove it from all posts that have it.
  //TODO: THIS WILL BE IMPLEMEMNTED ON THE SERVER SIDE

  const {
    getCategories,
    getTags,
    createTag,
    updateTag,
    deleteTag,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useAdminContext();

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [categoryInput, setCategoryInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    console.log(`categories page mounted`);
    const fetchCategoriesAndTags = async () => {
      const categories = await getCategories();
      const tags = await getTags();
      console.log('Fetched categories:', JSON.stringify(categories, null, 2));
      setCategories(categories);
      setTags(tags);
    };
    fetchCategoriesAndTags();
  }, []);

  const handleAddCategory = async () => {
    const newCategory = await createCategory({ category: categoryInput });
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setCategoryInput('');
    } else {
      console.error('Error creating category');
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    await deleteCategory(categoryId);
    setCategories(categories.filter((category) => category._id !== categoryId));
  };

  const handleAddTag = async () => {
    const newTag = await createTag({ tag: tagInput });
    if (newTag) {
      setTags([...tags, newTag]);
      setTagInput('');
    } else {
      console.error('Error creating tag');
    }
  };

  const handleDeleteTag = async (tagId) => {
    await deleteTag(tagId);
    setTags(tags.filter((tag) => tag._id !== tagId));
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setCategoryInput(category.category);
  };

  const handleEditTag = (tag) => {
    setSelectedTag(tag);
    setTagInput(tag.tag);
  };

  const handleSaveCategory = async () => {
    if (selectedCategory) {
      await updateCategory(selectedCategory._id, { category: categoryInput });
      setCategories(
        categories.map((category) =>
          category._id === selectedCategory._id
            ? { ...category, category: categoryInput }
            : category
        )
      );
      setSelectedCategory(null);
      setCategoryInput('');
    }
  };

  const handleSaveTag = async () => {
    if (selectedTag) {
      await updateTag(selectedTag._id, { tag: tagInput });
      setTags(
        tags.map((tag) =>
          tag._id === selectedTag._id ? { ...tag, tag: tagInput } : tag
        )
      );
      setSelectedTag(null);
      setTagInput('');
    }
  };

  //TODO: Have one column for categories and one for tags. Have a button to add a new category or tag. Have a button to delete a category or tag. Have a button to edit a category or tag. Have a button to save a category or tag.
  return (
    <Container>
      <Column>
        <Title>Manage Post Categories</Title>
        <ItemList key={categories.length}>
          {categories.map((category) => (
            <Item key={category._id}>
              {category.category}
              <div>
                <Button onClick={() => handleEditCategory(category)}>
                  Edit
                </Button>
                <Button onClick={() => handleDeleteCategory(category._id)}>
                  Delete
                </Button>
              </div>
            </Item>
          ))}
        </ItemList>
        <Input
          type='text'
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          placeholder='Enter category name'
        />
        <Button onClick={handleAddCategory}>Add Category</Button>
        {selectedCategory && (
          <Button onClick={handleSaveCategory}>Save Category</Button>
        )}
      </Column>
      <Column>
        <Title>Manage Post Tags</Title>
        <ItemList>
          {tags.map((tag) => (
            <Item key={tag._id}>
              {tag.tag}
              <div>
                <Button onClick={() => handleEditTag(tag)}>Edit</Button>
                <Button onClick={() => handleDeleteTag(tag._id)}>Delete</Button>
              </div>
            </Item>
          ))}
        </ItemList>
        <Input
          type='text'
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          placeholder='Enter tag name'
        />
        <Button onClick={handleAddTag}>Add Tag</Button>
        {selectedTag && <Button onClick={handleSaveTag}>Save Tag</Button>}
      </Column>
    </Container>
  );
};

export default AdminCategories;
