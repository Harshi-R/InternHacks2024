import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <img src="profile-pic.png" alt="Profile" className="profile-pic" />
      <h2>User Name</h2>
      <textarea placeholder="What's on your mind?" className="status-update"></textarea>
      <div className="quick-links">
        <a href="/settings">Settings</a>
        <a href="/friends">Friends</a>
        <a href="/notifications">Notifications</a>
      </div>
    </div>
  );
};

export default Profile;
