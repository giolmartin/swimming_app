import React from 'react';

import { FormGroup, Label, Input } from '../adminPostEditor.styles';

const Excerpt = ({ excerpt, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='date'>Excerpt</Label>
        <Input
          type='text'
          name='excerpt'
          id='excerpt'
          value={excerpt}
          onChange={handleInputChange}
        />
      </FormGroup>
    </>
  );
};

export default Excerpt;
