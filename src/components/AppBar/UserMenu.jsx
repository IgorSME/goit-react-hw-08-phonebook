import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'Redux/Auth/authOperations';
import { getUserEmail } from 'Redux/selectors';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <div>
      <span>Hello, {email}</span>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        LogOut
      </button>
    </div>
  );
}
