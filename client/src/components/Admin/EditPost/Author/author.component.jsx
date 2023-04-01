import React from 'react';

import { FormGroup, Label, Input } from '../adminPostEditor.styles';

const Author = ({ author, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='author'>Author</Label>
        <Input
          type='text'
          name='author'
          id='author'
          value={author}
          onChange={handleInputChange}
        />
      </FormGroup>
    </>
  );
};

export default Author;
