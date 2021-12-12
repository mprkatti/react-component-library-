import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [name, setName] = useState("Basava");
  const [location, setLocation] = useState('BLR');

  return (

    <UserContext.Provider
      value={{
        name, location, setName, setLocation
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
