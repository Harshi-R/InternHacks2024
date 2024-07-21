import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import ExploreCommunities from './components/ExploreCommunities';
import RevisitMemories from './components/RevisitMemories';
import MyEvents from './components/MyEvents';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavigationBar />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/explore" component={ExploreCommunities} />
            <Route path="/memories" component={RevisitMemories} />
            <Route path="/events" component={MyEvents} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

