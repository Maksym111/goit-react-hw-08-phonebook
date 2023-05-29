import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? children : <Navigate to="/login" />;
};

export default PublicRoute;
