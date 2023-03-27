import styled from 'styled-components';
import { WesAndersonExercises } from '../../global.styles';

export const Container = styled.div`
  background-color: ${WesAndersonExercises.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const Title = styled.h1`
  color: ${WesAndersonExercises.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  color: ${WesAndersonExercises.secondary};
  font-size: 1.1rem;
`;

export const Input = styled.input`
  border: 2px solid ${WesAndersonExercises.primary};
  background-color: ${WesAndersonExercises.background};
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${WesAndersonExercises.accent1};
  }
`;

export const Select = styled.select`
  border: 2px solid ${WesAndersonExercises.primary};
  background-color: ${WesAndersonExercises.background};
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${WesAndersonExercises.accent1};
  }
`;

export const GenerateButton = styled.button`
  background-color: ${WesAndersonExercises.accent2};
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${WesAndersonExercises.accent1};
  }
`;
