import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { filters, routes } from './Consts';
import TodoMain from './TodoMain';

export default function App() {
    return (
        <Switch>
            <Route path={routes.ALL}>
                <TodoMain filter={filters.ALL} />
            </Route>
            <Route path={routes.COMPLETED}>
                <TodoMain filter={filters.COMPLETED} />
            </Route>
            <Route path={routes.NOT_COMPLETED}>
                <TodoMain filter={filters.NOT_COMPLETED} />
            </Route>
            <Route exact path="/">
                <TodoMain filter={filters.ALL} />
            </Route>
        </Switch>
    );
}