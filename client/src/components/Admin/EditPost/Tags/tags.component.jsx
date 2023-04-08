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
              <option
                key={tag._id}
                value={tag._id}
                selected={tags.includes(tag._id)}
              >
                {tag.tag.charAt(0).toUpperCase() + tag.tag.slice(1)}
              </option>
            ))}
        </Select>
      </FormGroup>
    </>
  );
};

export default Tags;
