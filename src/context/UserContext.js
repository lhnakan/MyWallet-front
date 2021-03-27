import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null);
    
  let config;
  if (user) {
    config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
  }
  return (
    <UserContext.Provider value={{
      user, setUser, config, 
    }}
    >
      { children }
    </UserContext.Provider>
  );
}
