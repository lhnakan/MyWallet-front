import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { FinancialProvider } from './context/FinancialContext';
import GlobalStyle from './assets/styles/globals';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import WalletStatement from './pages/WalletStatement';
import Output from './pages/addTransaction/Output';
import Input from './pages/addTransaction/Input';

export default function App() {
    return (
        <UserProvider>
            <FinancialProvider>
                <Router>
                    <>
                        <GlobalStyle />
                        <Switch>                    
                            <Route path="/" exact component={SignIn} />
                            <Route path="/sign-up" component={SignUp} />
                            <Route path="/statement" component={WalletStatement} />
                            <Route path="/add-spent" component={Output} />
                            <Route path="/add-received" component={Input} />
                        </Switch>
                    </>
                </Router>
            </FinancialProvider>
        </UserProvider>
    );
}