import React from 'react';
import { FormGroup, Label, Input } from '../adminPostEditor.styles';

const Title = ({ title, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='title'>Title</Label>
        <Input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={handleInputChange}
        />
      </FormGroup>
    </>
  );
};

export default Title;
