import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';
import { selectIsLogged, selectUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const isLogged = useSelector(selectIsLogged);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate('/login');
  }, [navigate, isLogged]);

  const handleLogOutBtn = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={handleLogOutBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
