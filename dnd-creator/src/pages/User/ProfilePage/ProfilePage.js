import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import profileIcon from './profileIcon.png';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

const ProfilePage = () => {
    const [userID, setUserID] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profileCreated, setProfileCreated] = useState('');
    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState({});
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);

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

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleAddComment = (comment) => {
        setComments([...comments, comment]);
    };

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
                        <div className="social-buttons">
                            <FacebookShareButton url={window.location.href} quote="Check out this profile!">
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location.href} title="Check out this profile!">
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <LinkedinShareButton url={window.location.href}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>
                        <div className="interaction">
                            <button onClick={handleLike}>Like ({likes})</button>
                            <div>
                                <h4>Comments:</h4>
                                <ul>
                                    {comments.map((comment, index) => (
                                        <li key={index}>{comment}</li>
                                    ))}
                                </ul>
                                <CommentForm onAddComment={handleAddComment} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

const CommentForm = ({ onAddComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            onAddComment(comment);
            setComment('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
            />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default ProfilePage;
