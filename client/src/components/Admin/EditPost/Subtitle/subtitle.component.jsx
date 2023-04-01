import React from 'react';
import { FormGroup, Label, Input } from '../adminPostEditor.styles';
const Subtitle = ({ subtitle, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='subtitle'>Subtitle</Label>
        <Input
          type='text'
          name='subtitle'
          id='subtitle'
          value={subtitle}
          onChange={handleInputChange}
        />
      </FormGroup>
    </>
  );
};

export default Subtitle;
