import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PablicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { fetchThunkUser } from 'redux/auth/auth-operations';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationUserPage = lazy(() => import('pages/RegistrationUserPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchThunkUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <RegistrationUserPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
