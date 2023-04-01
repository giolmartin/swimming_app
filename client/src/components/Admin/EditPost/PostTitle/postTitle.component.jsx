import React from 'react';

import { FormGroup, Label, Input } from '../adminPostEditor.styles';

const PostTitle = ({ postTitle, handlePostChange }) => {
  return (
    <>
      <Label htmlFor='title'>Post</Label>
      <FormGroup>
        <Label htmlFor='postTitle'>Post Title</Label>
        <Input
          type='text'
          name='postTitle'
          id='postTitle'
          value={postTitle}
          onChange={(e) => {
            handlePostChange(e, null);
          }}
        />
      </FormGroup>
    </>
  );
};

export default PostTitle;
