import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'Redux/selectors';

export function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;

  return (
    <>
      {shoudRedirect ? <Navigate to={'/contacts'} replace={true} /> : children}
    </>
  );
}
