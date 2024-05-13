import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from "./Icon.png";

// StyleSheets
import './navbar.css';
import { LoginPage } from "../../pages/default/login/login-page";

function NavBar(props) {
  if (props.isLoggedIn === 'true') {
    return (
      <nav id="Nav">
        <ul id="nav_tab_group">
          <li class="nav_tab">
            <Link to="/profile">Profile</Link>
          </li>
          <li class="nav_tab">
            <Link to="/groups">Groups</Link>
          </li>
          <li class="nav_tab">
            <Link to="/sheets">Sheets</Link>
          </li>
          <li class="nav_tab">
            <Link to="/wiki">Wiki</Link>
          </li>

          <li class="nav_home" id="logo">
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
          <li class="nav_tab">
            <Link to="/wiki">Wiki</Link>
          </li>
          <li class="nav_tab">
            <Link to="/creator">Creator</Link>
          </li>
          <li class="nav_home" id="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </li>
        </ul>
      </div>
    );
  }

}

export { NavBar };