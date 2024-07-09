import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  return (
    <UserContext.Provider value={{ name, setName, nim, setNim }}>
      {children}
    </UserContext.Provider>
  );
};
