import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './components/UserContext';

ReactDOM.render(
  //wrap the root element with context 
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);

