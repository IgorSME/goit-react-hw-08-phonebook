import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'Redux/selectors';

export function AppNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {isLoggedIn && <Link to={'/contacts'}>Contacts</Link>}
    </nav>
  );
}
