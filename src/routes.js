import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Breeds from './pages/Breeds';
import Feedback from './pages/Feedback';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Breeds} />
        <Route path="/feedback" component={Feedback} />
    </Switch>
);

export default Routes;