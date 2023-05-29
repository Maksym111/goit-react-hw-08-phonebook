import { useSelector } from 'react-redux';
import { selectIsLogged } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NavItem, Navigation } from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { AppBar } from '@mui/material';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <Container>
      <AppBar position="fixed">
        <Navigation>
          <NavItem to="/" end>
            Home
          </NavItem>
          {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}

          {!isLoggedIn && <NavItem to="/registration">Registration</NavItem>}

          {!isLoggedIn ? <NavItem to="/login">Login</NavItem> : <UserMenu />}
        </Navigation>
      </AppBar>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
