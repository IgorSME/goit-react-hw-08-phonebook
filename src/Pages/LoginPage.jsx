import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUser } from 'Redux/Auth/authOperations';
import Button from '@mui/material/Button';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
