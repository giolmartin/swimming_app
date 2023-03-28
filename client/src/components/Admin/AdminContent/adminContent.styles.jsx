import styled from 'styled-components';

export const AdminContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const AdminContentHeader = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const AdminContentSubHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const AdminContentParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const AdminContentLink = styled.a`
  color: #333;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f5f5f5;
  }

  &.active {
    color: #ffd700;
  }
`;
