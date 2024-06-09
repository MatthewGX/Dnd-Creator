import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-page.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = async () => {
    try {
      const response = await fetch('http://localhost:4000/user/login', { 
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': username, 'password': password }),
      });
      
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem('loggedInUser', JSON.stringify(data));
        setMessage('Login successful');
        navigate("/user");
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const handleRegister = async () => {
    if (username === "" || password === "") {
      setMessage("Username and password cannot be empty.");
      return;
    }

    try {
      console.log(username, password)
      let test = JSON.stringify({ 'username': username, 'password': password });
      console.log(test);
      const response = await fetch('http://localhost:4000/user/register', { 
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          password: password
        }),
      });

      if (response.ok) {
        setMessage('Registration successful! You can now log in.');
      } else {
        setMessage('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
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
