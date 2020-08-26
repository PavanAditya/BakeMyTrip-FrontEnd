import React, { useState } from 'react';
import Header from './components/core/Header';
import Loader from './components/shared/Loader';
import './App.css';

function App() {

  const [app, setApp] = useState('loading');
  const [stage, setStage] = useState('unscrolled');
  const [authorized, setAuthorized] = useState(false);

  setTimeout(() => {
    setApp('loaded');
  }, 7000);

  return (
    <div className="App">
      {app === 'loading'
        ? <Loader />
        :
        <div>
          <Header stage={stage} authorized={authorized} />
          <div className="router">hi</div>
        </div>
      }
    </div>
  );
}

export default App;
