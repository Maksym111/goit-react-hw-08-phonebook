import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 40px;
`;

export const Navigation = styled.nav`
  margin: 0 150px;
  display: grid;
  grid-template-columns: repeat(2, auto) 1fr;
  justify-content: flex-start;
`;
export const NavItem = styled(NavLink)`
  padding: 20px 10px;

  color: white;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 30px;
  }

  :hover {
    text-decoration: underline;
  }
`;
