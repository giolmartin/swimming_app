import styled from 'styled-components';

export const EditPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Playfair Display', serif;
  color: #3a3633;
  background-color: #f3dbb3;
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
  color: #3a3633;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #a34b1d;
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
  background-color: #d07f6f;
  color: #fff;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a34b1d;
  }
`;

export const CategoriesTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const HeaderImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto,
  margin-top: 1rem;
`;

