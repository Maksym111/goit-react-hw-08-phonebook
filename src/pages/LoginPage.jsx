import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => navigate('/contacts'));

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
    <form action="" onSubmit={handleSubmit}>
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
          onChange={inputChange}
        />
      </div>

      <button type="submite">Login In</button>
    </form>
  );
};

export default LoginPage;
