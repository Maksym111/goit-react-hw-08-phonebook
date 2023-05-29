import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';

import { TextField } from '@mui/material';
import { LoginBtn, FormLogin, Title } from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  const inputChange = e => {
    const input = e.target;
    switch (input.name) {
      case 'email': {
        return setEmail(input.value);
      }
      case 'password': {
        return setPassword(input.value);
      }
      default:
        return '';
    }
  };
  return (
    <FormLogin action="" onSubmit={handleSubmit}>
      <Title>Log In</Title>
      <TextField
        label="Login"
        type="email"
        name="email"
        placeholder="mark@example.com"
        required
        value={email}
        onChange={inputChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        required
        value={password}
        onChange={inputChange}
      />

      <LoginBtn variant="contained" type="submite">
        Login In
      </LoginBtn>
    </FormLogin>
  );
};

export default LoginForm;
