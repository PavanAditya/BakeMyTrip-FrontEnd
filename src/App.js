import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/core/Header';
import Loader from './components/shared/Loader';
import FlightsPage from './components/flights/FlightsPage';
import HomePage from './components/flights/HomePage';
// import PrivacyNote from './components/shared/PrivacyNote';
import './App.css';

function App() {

  const [appState, setAppState] = useState('loading');
  const [stage, setStage] = useState('unscrolled');
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setStage(position < 475 ? 'unscrolled' : 'scrolled');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    const params = new URLSearchParams(window.location.search);
    if (localStorage.getItem('token')) {
      setToken(params.get('token'));
      setAuthorized(true);
    } else if (params.get('token')) {
      setToken(params.get('token'));
      localStorage.setItem('token', params.get('token'));
      setAuthorized(true);
      window.location.replace(window.location.origin);
    } else {
      setAuthorized(false);
      setToken(null);
    }
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
          <Header stage={stage} appState={appState} authorized={authorized} setAuthorized={setAuthorized} token={token} />
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/flights" exact component={FlightsPage} />
          {/* <Route path="/privacynote" exact component={PrivacyNote} /> */}
        </div>
      }
    </div>
  );
}

export default App;
