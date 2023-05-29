import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogged } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const location = useLocation();
  return isLogged ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
