import styled from 'styled-components';

export const BlogPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: rgba(254, 240, 172, 1);
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const BlogPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
`;

export const Content = styled.div`
  flex-grow: 1;
  margin-top: 3rem;
  margin-left: 4rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;
