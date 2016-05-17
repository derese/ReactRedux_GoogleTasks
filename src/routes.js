import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/app';
import Tasks from './components/Tasks';
import TaskDetail from './components/TaskDetail';



export default (
<Route path="/">
    <IndexRoute component={Tasks} />        
    <Route path=":id" component={TaskDetail} />
</Route>
);