import React, { useState, useEffect } from 'react';
import '../Styles/Profile.css';

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      const user = {
        username: 'JEEVA',
        email: 'jeeva@example.com',
        bio: 'Software Developer with a passion for coding and technology.',
        location: 'San Francisco, CA',
        profilePicture: 'https://via.placeholder.com/150', // Dummy profile picture
      };
      setCurrentUser(user);
    };

    fetchUser();
  }, []);

  if (!currentUser) {
    return (
      <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <p className="profile-message">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <img src={currentUser.profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <p><strong>Username:</strong> {currentUser.username}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>
      </div>
      <div className="profile-details">
        <h2 className="profile-title">About Me</h2>
        <p><strong>Bio:</strong> {currentUser.bio}</p>
        <p><strong>Location:</strong> {currentUser.location}</p>
      </div>
    </div>
  );
}

export default Profile;
