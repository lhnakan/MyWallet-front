import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
    const [user, setUser] = useLocalStorage('user', null);
    const [statementList, setStatementList] = useState(false);
    
    
    let config;
    if(user) {
        config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
    }
    return (
        <UserContext.Provider value={{ user, setUser, config, statementList, setStatementList }}>
            { children }
        </UserContext.Provider>
    );
}