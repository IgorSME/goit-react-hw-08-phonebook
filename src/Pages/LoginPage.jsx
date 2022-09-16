import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUser } from 'Redux/Auth/authOperations';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';

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
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={10} sx={{ bgcolor: '#cfe8fc' }} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Login Page
          </Typography>
          <Box
            component="form"
            sx={
              ({
                '& > :not(style)': { m: 1, width: '25ch' },
              },
              {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              })
            }
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            textAlign="center"
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <Button type="submit" variant="contained" sx={{ mb: 3 }}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
