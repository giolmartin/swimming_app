import styled from 'styled-components';

export const EditPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;
export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
export const EditPostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 150px;
`;
export const Button = styled.button`
  width: auto;
  height: auto;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  margin-bottom: 1rem;
  margint-top: 1rem;

  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CategoriesTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;
