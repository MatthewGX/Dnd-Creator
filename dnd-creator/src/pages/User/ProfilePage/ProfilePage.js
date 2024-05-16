import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileCreated, setProfileCreated] = useState('');

  useEffect(() => {
    setUsername('JohnDoe142');
    setPassword('********');
    setProfileCreated('4/14/2024');
  }, []);

  return (
    <div className="profile-page">
      <main>
        <section id="profile">
          <img src="/path/to/profile.png" alt="Profile Picture" />
          <div>
            <p>Username: <span id="username">{username}</span></p>
            <p>Password: <span id="password">{password}</span></p>
            <p>Profile Created: <span id="profileCreated">{profileCreated}</span></p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
