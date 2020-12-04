import React, { createContext, useState, useEffect } from 'react';

const FinancialContext = createContext();
export default FinancialContext;

export function FinancialProvider({ children }) {
    const [statementList, setStatementList] = useState(false);
    
    return (
        <FinancialContext.Provider value={{ statementList, setStatementList }}>
            { children }
        </FinancialContext.Provider>
    );
}