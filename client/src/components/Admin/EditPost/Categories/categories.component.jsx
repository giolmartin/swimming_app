import React from 'react';
import { FormGroup, Label, Select } from '../adminPostEditor.styles';

const Categories = ({ categoriesList, postEdit, handleCategoryChange }) => {
  return (
    <FormGroup>
      <Label htmlFor='category'>Categories</Label>
      <Select
        name='category'
        id='category'
        value={postEdit.categories}
        onChange={handleCategoryChange}
        multiple
      >
        {categoriesList &&
          categoriesList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </Select>
    </FormGroup>
  );
};

export default Categories;
