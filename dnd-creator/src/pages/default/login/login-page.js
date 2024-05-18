import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-page.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (!storedUser || storedUser.password !== password) {
      setMessage('Invalid username or password');
      return false;
    }

    // Store the logged-in username in localStorage
    localStorage.setItem('loggedInUser', username);
    navigate("/user");
    console.log(username, password);
    return true;
  };

  const handleRegister = () => {
    if (username === "" || password === "") {
      setMessage("Username and password cannot be empty.");
      return;
    }

    const profileCreated = new Date().toLocaleDateString();
    localStorage.setItem(username, JSON.stringify({ username, password, profileCreated }));
    setMessage("Registration successful! You can now log in.");
  };

  return (
    <div>
      <div id="login">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-box">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <Link to="reset">Forgot Password?</Link>
          {message && <p className="message">{message}</p>}
          <div className="button-group">
            <button type="button" onClick={validateForm}>Login</button>
            <button type="button" onClick={handleRegister}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
