import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'Redux/selectors';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <main>
      <h1>Home Page</h1>
      {isLoggedIn ? (
        <p>Welcome to phonebook App</p>
      ) : (
        <p>
          `Welcome! You need to {<Link to={'/register'}>register</Link>} in App
          or {<Link to={'/login'}>login</Link>}`
        </p>
      )}
    </main>
  );
}
