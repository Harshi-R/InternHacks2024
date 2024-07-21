import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/explore" activeClassName="active">Explore Communities</NavLink>
      <NavLink to="/memories" activeClassName="active">Revisit Memories</NavLink>
      <NavLink to="/events" activeClassName="active">My Events</NavLink>
    </nav>
  );
};

export default NavigationBar;
