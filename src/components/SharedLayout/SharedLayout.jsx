import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          <p>HOME</p>
        </NavLink>
        <NavLink to="/workspace">
          <p>WORKSPACE</p>
        </NavLink>
      </nav>
      <Suspense>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
