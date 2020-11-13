import React from 'react'
import NavBar from './navbar/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Essentials/Contact'


export const Main = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/home' />
                <Route path='/todo' />
                <Route exact path='/contactus' component={Contact} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default Main