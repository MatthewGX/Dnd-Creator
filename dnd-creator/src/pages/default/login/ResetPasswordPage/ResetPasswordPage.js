import React, { useState } from 'react';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    const user = JSON.parse(localStorage.getItem(username));
    if (user) {
      user.password = newPassword;
      localStorage.setItem(username, JSON.stringify(user));
      setMessage('Password reset successful!');
    } else {
      setMessage('Username not found!');
    }
  };

  return (
    <div className="reset-password-page">
      <main>
        <div className="reset-container">
          <h1>Reset Password</h1>
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
                id="new-password"
                name="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label htmlFor="new-password">New Password</label>
            </div>
            {message && <p className="message">{message}</p>}
            <button type="button" onClick={handleResetPassword}>Reset Password</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
