import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'Redux/Auth/authOperations';
import { getUserEmail } from '../../Redux/selectors';
import avatar from '../../images/avatar.png';
import MenuItem from '@mui/material/MenuItem';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <Box sx={{ display: { xs: 'flex' }, ml: 'auto' }}>
      <IconButton sx={{ p: 0 }}>
        <Avatar alt="avatar" src={avatar} />
      </IconButton>

      <MenuItem>
        <Typography textAlign="center">
          <span>Hello, {email}</span>
        </Typography>
      </MenuItem>
      <Button
        type="button"
        variant="outlined"
        color="error"
        onClick={() => dispatch(logOutUser())}
      >
        Logout
      </Button>
    </Box>
  );
}
