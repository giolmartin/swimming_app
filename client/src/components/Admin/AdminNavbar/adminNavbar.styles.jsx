import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminNavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #333;
  padding: 1rem 0;
`;

export const NavbarItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }

  &.active {
    background-color: #ffd700;
    color: #333;
  }
`;
