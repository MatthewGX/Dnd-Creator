import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import profileIcon from './profileIcon.png';

const ProfilePage = () => {
    const [userID, setUserID] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profileCreated, setProfileCreated] = useState('');
    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState({});

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

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => console.error('Error getting location:', error),
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        // Fetch weather information if location is available
        if (location.latitude && location.longitude) {
            const fetchWeather = async () => {
                const apiKey = 'dce550dbe34449cdbb4165251241006'; // Expires every 24 hour. Need to regenerate
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location.latitude},${location.longitude}&aqi=no`);
                const data = await response.json();
                setWeather(data);
            };

            fetchWeather();
        }
    }, [location]);

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
                        {location.latitude && location.longitude && (
                            <p>Location: <span id="location">{location.latitude}, {location.longitude}</span></p>
                        )}
                        {weather.current && (
                            <p>Weather: <span id="weather">{weather.current.condition.text}, {weather.current.temp_c}°C</span></p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProfilePage;
