import { ApiContact } from 'fetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';
import { FormLogin, SignUpBtn, Title } from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await ApiContact.register({ name, email, password });

    if (data.status !== 400) {
      navigate('/login');
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  const inputChange = e => {
    const input = e.target;
    switch (input.name) {
      case 'name': {
        return setName(input.value);
      }
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
      <Title>Sign Up</Title>
      <TextField
        label="Name"
        type="text"
        name="name"
        placeholder="Mark Krasnov"
        required
        value={name}
        onChange={inputChange}
      />
      <TextField
        label="Email"
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
        minLength={7}
        onChange={inputChange}
      />

      <SignUpBtn variant="contained" type="submite">
        Create account
      </SignUpBtn>
    </FormLogin>
  );
};

export default RegisterForm;
