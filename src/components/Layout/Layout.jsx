import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
