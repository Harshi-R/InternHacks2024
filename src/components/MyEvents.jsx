import React from 'react';
import './MyEvents.css';

const MyEvents = () => {
  return (
    <div className="my-events">
      <div className="upcoming-events">
        <h3>Upcoming Event 1</h3>
        <p>Date, Time, Description</p>
        <h3>Upcoming Event 2</h3>
        <p>Date, Time, Description</p>
      </div>
      <button className="create-event-button">Create Event</button>
      <div className="calendar-view">
        {/* Add your calendar view here */}
      </div>
    </div>
  );
};

export default MyEvents;
