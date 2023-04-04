import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;
  font-family: 'Futura', sans-serif;
  background-color: ${WesAndersonColors.comments.container};
  padding: 2rem;
  border-radius: 8px;
`;

export const CommentList = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const Comment = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${WesAndersonColors.comments.background1};
  border-radius: 4px;
  width: 100%;
  max-width: 800px;

  &:nth-child(even) {
    background-color: ${WesAndersonColors.comments.background2};
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 100px;
  margin-bottom: 1rem;
  border: 2px solid ${WesAndersonColors.comments.accent};
  border-radius: 4px;
  width: 100%;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  border: 2px solid ${WesAndersonColors.comments.contrast};
  border-radius: 4px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  font-family: 'Futura', sans-serif;
  font-weight: bold;
  color: white;
  background-color: ${WesAndersonColors.comments.accent};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;
  max-width: 200px;

  &:hover {
    background-color: ${WesAndersonColors.comments.contrast};
  }
`;
