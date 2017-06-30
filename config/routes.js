import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../src/app';
import MainContainer from '../src/containers/mainContainer';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={MainContainer} />
        </Route>
    </Router>
);

export default Routes;