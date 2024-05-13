// Layout.js

import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar";

function Layout() {
  return (
    <>
      <NavBar isLoggedIn="true" />

      <Outlet />
    </>
  );
}

export default Layout;