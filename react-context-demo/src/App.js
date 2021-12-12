import React from 'react'
import './App.css';
import UserForm from './components/UserForm';
import Name from './components/NameComponent';
import Location from './components/LocationComponent';

function App() {

  return (
    <div className="App">
      <h2 className="is-size-4">
        We'll use the React Context API to pass and receive data in
        any component.
      </h2>
      <div className="container">
        <UserForm />
        <h2 className="is-size-4">Display User Info Here 👇</h2>
        <p>
          These two children components will receive data. These could
          be nested components.
        </p>
        <Name />
        <Location />
      </div>
    </div>
  );
}

export default App;
