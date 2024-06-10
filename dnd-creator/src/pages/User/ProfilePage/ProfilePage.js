import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import profileIcon from './profileIcon.png';

const ProfilePage = () => {
    const [userID, setUserID] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profileCreated, setProfileCreated] = useState('');

    useEffect(() => {
        // Get the logged-in user's information from localStorage
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user) {
                setUserID(user._id); // Set the UserID
                setUsername(user.username);
                setPassword('********'); // Mask the password
                setProfileCreated(user.profileCreated);
            }
        }
    }, []);

    return (
        <div className="profile-page">
            <main>
                <section id="profile">
                    <img src={profileIcon} alt="Profile Picture" />
                    <div>
                        <p>UserID: <span id="userID">{userID}</span></p> {/* Display UserID */}
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
