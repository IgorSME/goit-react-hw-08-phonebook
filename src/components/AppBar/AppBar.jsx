import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'Redux/selectors';
import { AppNav } from './AppNav';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <AppNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
