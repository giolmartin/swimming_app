import styled from 'styled-components';

export const AdminPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const PostList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

export const PostItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostTitle = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

export const PostSubtitle = styled.span`
  font-size: 1rem;
  color: #666;
`;
export const PostAuthorAndDate = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;
