import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);


  return (
    <div className="App">
      {loading ?
        <ScaleLoader
          loading={loading}
          size={50}
          color={'#F37A24'}
        />
        :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      }
    </div>
  );
}

export default App;
