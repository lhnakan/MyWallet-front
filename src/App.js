import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/sign-up" component={SignUp} />
                <Route path="/" exact component={SignIn} />
            </Switch>
        </Router>
    );
}