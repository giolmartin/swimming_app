import React from 'react';
import { FormGroup, Label, Select } from '../adminPostEditor.styles';

const Categories = ({
  categoriesList,
  postEdit,
  handleCategoryChange,
  categories,
}) => {
  return (
    <FormGroup>
      <Label htmlFor='category'>Categories</Label>
      <Select
        name='category'
        id='category'
        value={postEdit.categories}
        onChange={handleCategoryChange}
        size='8'
        multiple
        required
      >
        {categoriesList &&
          categoriesList.map((category) => (
            <option
              key={category}
              value={category}
              selected={categories.includes(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
      </Select>
    </FormGroup>
  );
};

export default Categories;
