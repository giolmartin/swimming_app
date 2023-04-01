import React from 'react';

import { FormGroup, Label, TextArea } from '../adminPostEditor.styles';
const Conclusion = ({ conclusion, handlePostChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='conclusion'>Conclusion</Label>
        <TextArea
          name='conclusion'
          id='conclusion'
          value={conclusion}
          onChange={(e) => {
            handlePostChange(e, null);
          }}
        />
      </FormGroup>
    </>
  );
};

export default Conclusion;
