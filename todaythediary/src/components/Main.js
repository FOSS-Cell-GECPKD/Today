import React from 'react'
import NavBar from './navbar/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom';



export const Main = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/home' />
                <Route path='/todo' />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default Main