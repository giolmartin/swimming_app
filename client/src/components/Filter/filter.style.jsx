import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 6rem;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: static;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
`;

export const FilterIcon = styled.span`
  margin-right: 0.5rem;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    &:hover {
      transform: none;
    }
  }
`;

export const FilterText = styled.span`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
