import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

const Routes = () => {
    return (
        <Route>
            <Switch path="/">
                <Home />
            </Switch>
        </Route>
    )
}

export default Routes
