import PrivateRoute from 'components/PrivatRoute/PrivatRoute';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationUserPage = lazy(() => import('pages/RegistrationUserPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/registration" element={<RegistrationUserPage />} />
        <Route path="/login" element={<LoginPage />} />
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
