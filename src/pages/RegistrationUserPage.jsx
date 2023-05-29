import { ApiContact } from 'fetch';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const RegistrationUserPage = () => {
  const dispatch = useDispatch();
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
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          name="name"
          id="nameInput"
          placeholder="Mark Krasnov"
          required
          value={name}
          onChange={inputChange}
        />
      </div>
      <div>
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          name="email"
          id="emailInput"
          placeholder="mark@example.com"
          required
          value={email}
          onChange={inputChange}
        />
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          name="password"
          id="passwordInput"
          required
          value={password}
          minLength={7}
          onChange={inputChange}
        />
      </div>

      <button type="submite">Create account</button>
    </form>
  );
};

export default RegistrationUserPage;
