import React, { useEffect, useState } from 'react';
import { useBlogContext } from '../../context/blog.context';
import {
  CommentsContainer,
  CommentForm,
  CommentList,
  Comment,
  TextArea,
  SubmitButton,
  Input,
} from './comments.styles';

const Comments = ({ postId }) => {
  const { getCommentsByPostId, addComment, updateComment, deleteComment } =
    useBlogContext();
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getCommentsByPostId(postId);
      setComments(comments);
    };
    fetchComments();
  }, [postId, getCommentsByPostId, addComment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = {
      author: name,
      content: content,
    };
    await addComment(postId, comment);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //   const handleDelete = async (commentId) => {
  //     await deleteComment(commentId);
  //     console.log('delete');
  //   };

  //   const handleUpdate = async (comment) => {
  //     await updateComment(comment);
  //     console.log('update');
  //   };

  return (
    <CommentsContainer>
      <CommentList>
        {comments &&
          comments.map((comment, index) => (
            <Comment key={index}>
              <strong>{comment.author}</strong>: {comment.content}
            </Comment>
          ))}
      </CommentList>
      <CommentForm onSubmit={handleSubmit}>
        <Input placeholder='Name' value={name} onChange={handleNameChange} />
        <TextArea
          placeholder='Write your comment...'
          value={content}
          onChange={handleContentChange}
        />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </CommentForm>
    </CommentsContainer>
  );
};

export default Comments;
