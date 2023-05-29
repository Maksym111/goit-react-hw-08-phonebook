import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 40px;
`;

export const Navigation = styled.nav``;

export const NavItem = styled(NavLink)`
  :not(:last-child) {
    margin-right: 30px;
  }
`;
