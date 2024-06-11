// UserLayout.js

import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navbar/navbar";

const UserLayout = () => {
  return (
    <>
      <NavBar isLoggedIn="true" />

      <Outlet />
    </>
  );
}

export default UserLayout;