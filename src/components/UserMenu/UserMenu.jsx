import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';
import { selectIsLogged, selectUser } from 'redux/auth/auth-selectors';
import { EmailTitle, LogOutBtn, Wrap } from './UserMenu.styled';

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
    <Wrap>
      <EmailTitle>{email}</EmailTitle>
      <LogOutBtn
        variant="contained"
        size="small"
        color="error"
        disableElevation
        type="button"
        onClick={handleLogOutBtn}
      >
        Log out
      </LogOutBtn>
    </Wrap>
  );
};

export default UserMenu;
