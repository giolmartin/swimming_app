import React from 'react';

import { FormGroup, Label, Input } from '../adminPostEditor.styles';

const Date = ({ date, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='date'>Date</Label>
        <Input
          type='text'
          name='date'
          id='date'
          value={date}
          onChange={handleInputChange}
        />
      </FormGroup>
    </>
  );
};

export default Date;
