import styled from 'styled-components';
import { WesAndersonColors } from '../../global.styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #428576;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  height: 450px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(255, 193, 7, 0.5);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  height: calc(100% - 200px);
  overflow-y: auto;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #428576;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffa07a;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #428576;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  ${'' /* font-weight: 800; */}
  font-size: 1.5rem;
  font-weight: bold;
  color: #f0e68c;
  margin-bottom: 0.5rem;
`;

export const CardDateAuthor = styled.p`
  font-family: 'Josefin Slab', serif;
  font-weight: 500;
  font-size: 1rem;
  color: #ededed;
  margin-bottom: 1rem;
`;

export const CardExcerpt = styled.p`
  font-family: 'Josefin Slab', serif;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #ededed;
`;

export const ReadMoreButton = styled.button`
  font-family: 'Josefin Slab', serif;
  font-size: 1rem;
  text-align: center;
  background-color: #ffa07a;
  color: #ededed;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  margin: 1rem auto;
  width: fit-content;
  z-index: 11;

  &::hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(255, 193, 7, 0.5);
  }
`;
