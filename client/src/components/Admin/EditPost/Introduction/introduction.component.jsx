import React from 'react';

import { FormGroup, Label, TextArea } from '../adminPostEditor.styles';
const Introduction = ({ introduction, handlePostChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='introduction'>Introduction</Label>
        <TextArea
          name='introduction'
          id='introduction'
          value={introduction}
          onChange={(e) => {
            handlePostChange(e, null);
          }}
        />
      </FormGroup>
    </>
  );
};

export default Introduction;
