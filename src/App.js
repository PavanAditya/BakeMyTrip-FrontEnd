import React, { useState, useEffect } from 'react';
import Header from './components/core/Header';
import Loader from './components/shared/Loader';
import './App.css';

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
          <div className="router">
            <div className="top-div"></div>
            <div></div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
