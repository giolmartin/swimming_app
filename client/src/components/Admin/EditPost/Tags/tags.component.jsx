import React from 'react';
import { FormGroup, Label, Select } from '../adminPostEditor.styles';

const Tags = ({ handleTagChange, tagsList, postEdit, tags }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='tags'>Tags</Label>
        <Select
          name='tags'
          id='tags'
          value={postEdit.tags}
          onChange={handleTagChange}
          size='8'
          multiple
          required
        >
          {tagsList &&
            tagsList.map((tag) => (
              <option key={tag} value={tag} selected={tags.includes(tag)}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
        </Select>
      </FormGroup>
    </>
  );
};

export default Tags;
