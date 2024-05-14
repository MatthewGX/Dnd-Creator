// login-page.js

import { Link, useNavigate } from 'react-router-dom';
import './login-page.css'

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <body>
        <div id="login">
          <form method="post" onsubmit="return validateForm()">
            <div class="input-box">
              {/* <!-- Should be "required" -->
                <!-- <input type="text" id="username" name="username" required> --> */}
              <input type="text" id="username" name="username" />
              <label for="username">Username</label>
            </div>
            <div class="input-box">
              {/* <!-- Should be "required" -->
                <!-- <input type="password" id="password" name="password" required> --> */}
              <input type="password" id="password" name="password" />
              <label for="password">Password</label>
            </div>
            {/* <a href="../forgot-password-page/forgot-password-page.html" class="forgot-password">Forgot Password?</a> */}
            <Link to="reset">Forgot Password?</Link>
            <div class="button-group">
              <button type="button" onClick={validateForm} >Login</button>
              <button type="button" onclick="window.location.href='../register-page/register-page.html';">Register</button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );

  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Disabled for demo purpose

    // if (username == "" || password == "") {
    //     alert("Username and password cannot be empty.");
    //     return false;
    // }
    navigate("../user")
    console.log(username, password);
    return true;
  }
}

export { LoginPage };