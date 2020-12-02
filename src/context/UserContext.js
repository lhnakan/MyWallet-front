import React, { createContext, useState } from 'react';

const UserContext = createContext();

export default UserContext;

export  function UserProvider({children}) {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}


