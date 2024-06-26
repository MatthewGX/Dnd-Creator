import { Link, NavLink } from 'react-router-dom';
import logo from "./Icon.png";

// StyleSheets
import './navbar.css';

function NavBar(props) {
  if (props.isLoggedIn === 'true') {
    return (
      <nav id="Nav">
        <ul id="nav_tab_group">
          <li className="nav_tab">
            <NavLink end to="/user">Profile</NavLink>
          </li>
          <li className="nav_tab">
            <NavLink to="/user/groups">Groups</NavLink>
          </li>
          <li className="nav_tab">
            <NavLink to="/user/sheets">Sheets</NavLink>
          </li>
          <li className="nav_tab">
            <NavLink to="/user/wiki">Wiki</NavLink>
          </li>

          <li className="nav_home" id="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </li>
        </ul>
      </nav>
    );
  }
  else {
    return (
      <div id="Nav">
        <ul id="nav_tab_group">
          <li className="nav_tab">
            <NavLink to="/wiki">Wiki</NavLink>
          </li>
          <li className="nav_tab">
            <NavLink to="/creator">Creator</NavLink>
          </li>
          <li className="nav_home" id="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </li>
        </ul>
      </div>
    );
  }

}

export { NavBar };