// Layout.js

import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../../components/navbar/navbar";

function Layout() {
  return (
    <>
      <NavBar isLoggedIn="false" />

      <Outlet />
    </>
  );
}

export default Layout;