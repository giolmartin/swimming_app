import styled from 'styled-components';

export const MinimalCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 1.5rem;
  min-width: 300px;
  overflow: hidden;
  height: 300px;
  ${'' /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); */}
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(255, 193, 7, 0.5);
    background-color: rgba(66, 133, 118, 0.1);
  }
`;

export const MinimalTitleContainer = styled.div`
  position: absolute;
  top: 1rem;
  width: 100%;
`;

export const MinimalCardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  color: #f0e68c;
  margin-bottom: 0.5rem;
`;

export const MinimalExcerptContainer = styled.div`
  overflow-y: auto;
  padding: 0.5rem;
  height: calc(100% - 50px);
  margin-bottom: 2.3rem;
  border: 1px solid rgba(240, 230, 140, 0.1);
  margin-top: 3rem;
  width: 90%;
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

export const MinimalCardExcerpt = styled.p`
  font-family: 'Josefin Slab', serif;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.5;
  color: #ededed;
`;

export const MinimalReadMoreButton = styled.button`
  position: absolute;
  bottom: 1rem;
  font-family: 'Josefin Slab', serif;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  background-color: #ffa07a;
  text-align: center;
  width: fit-content;
  margin-top: 1rem;
  color: #ededed;
  padding: 0.5rem 3rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #ff7f50;
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(255, 193, 7, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;
