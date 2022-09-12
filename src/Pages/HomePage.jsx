import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'Redux/selectors';

export function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <main>
      <h1>Home Page</h1>
      {isLoggedIn ? (
        <p>Welcome to phonebook App</p>
      ) : (
        <p>Welcome! You need to register in App or login</p>
      )}
    </main>
  );
}
