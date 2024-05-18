// landing-page.js

import { Link } from 'react-router-dom';
import './landing-page.css';

function LandingPage() {
  return (
    <>
      <div id="login">
        <span id="container">
          <div className="box" id="guest">
            {/* <a href="pages/offline/character-creator/character-main.html"><h1>Continue as Guest</h1></a> */}
            <Link to="creator"><h1>Continue as Guest</h1></Link>
          </div>
          <div className="box" id="sign">
            {/* <a href="pages/login/login-page/login-page.html"><h1>Login</h1></a> */}
            <Link to='login'><h1>Login</h1></Link>
          </div>
        </span>
      </div>
    </>

  );
}

export default LandingPage;