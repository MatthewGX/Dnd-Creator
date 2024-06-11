import React, { useState } from 'react';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    console.log('Sending data:', { username, newPassword });
    try {
      const response = await fetch('http://localhost:4000/user/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: username, newPassword: newPassword }),
      });

      if (response.ok) {
        setMessage('Password reset successful!');
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setMessage('Username not found or error resetting password!');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
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
