import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Friends++</h1>
      <div className="profile-icon">
        <img src="profile-icon.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
