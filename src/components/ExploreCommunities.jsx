import React from 'react';
import './ExploreCommunities.css';

const CommunityCard = ({ name, description, image }) => {
  return (
    <div className="community-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Join</button>
    </div>
  );
};

const ExploreCommunities = () => {
  return (
    <div className="explore-communities">
      <input type="text" placeholder="Search Communities" className="search-bar" />
      <div className="community-grid">
        <CommunityCard name="Community 1" description="Description 1" image="community1.png" />
        <CommunityCard name="Community 2" description="Description 2" image="community2.png" />
        <CommunityCard name="Community 3" description="Description 3" image="community3.png" />
        <CommunityCard name="Community 4" description="Description 4" image="community4.png" />
      </div>
    </div>
  );
};

export default ExploreCommunities;
