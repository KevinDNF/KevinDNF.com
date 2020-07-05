import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ReactProjectsPage from './ReactProjectsPage/ReactProjectsPage'
import PageNotFound from './PageNotFound';

const App = () => (
    <>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/ReactProjects' component={ReactProjectsPage} />
            <Route component={PageNotFound}></Route>
        </Switch>
    </>
)

export default App;