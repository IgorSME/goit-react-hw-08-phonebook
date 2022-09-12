import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUser } from 'Redux/Auth/authOperations';

export function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="">
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
}
