import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

export const Title = styled.h2`
  color: #7d8b99;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1ebe0;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #708d81;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: #f0e1a1;
  border: 1px solid #a69f98;
  color: #5e5651;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 8px 0;
  outline: none;
  padding: 8px 12px;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    border-color: #7b6b63;
    box-shadow: 0 0 3px rgba(123, 107, 99, 0.5);
  }

  ::placeholder {
    color: #a69f98;
  }
`;
