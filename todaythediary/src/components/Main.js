import React from 'react'
import Bar from './navbar/Bar'
import { Switch, Route, Redirect } from 'react-router-dom';



export const Main = () => {
    return (
        <div>
            <Bar />
            <Switch>
                <Route path='/home' />
                <Route path='/todo' />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default Main