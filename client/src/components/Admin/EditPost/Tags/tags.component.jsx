import React from 'react';
import { FormGroup, Label, Select } from '../adminPostEditor.styles';

const Tags = ({ handleTagChange, tagsList, postEdit }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='tags'>Tags</Label>
        <Select
          name='tags'
          id='tags'
          value={postEdit.tags}
          onChange={handleTagChange}
          multiple
        >
          {tagsList &&
            tagsList.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
        </Select>
      </FormGroup>
    </>
  );
};

export default Tags;
