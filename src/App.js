import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/core/Header';
import Loader from './components/shared/Loader';
import FlightsPage from './components/flights/FlightsPage';
import HomePage from './components/flights/HomePage';
import './App.css';
import PrivacyNote from './components/shared/PrivacyNote';

function App() {

  const [appState, setAppState] = useState('loading');
  const [stage, setStage] = useState('unscrolled');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setStage(position < 475 ? 'unscrolled' : 'scrolled');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  setTimeout(() => {
    setAppState('loaded');
  }, 3000);

  return (
    <div className="App">
      {appState === 'loading'
        ? <Loader />
        :
        <div>
          <Header stage={stage} appState={appState} />
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/flights" exact component={FlightsPage} />
          <Route path="/privacynote" exact component={PrivacyNote} />
        </div>
      }
    </div>
  );
}

export default App;
