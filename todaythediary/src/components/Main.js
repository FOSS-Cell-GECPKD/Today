import React from 'react'
import NavBar from './navbar/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import DiaryPage from './diarypage/diary';

=======
import Todo from './todo/Todo';
>>>>>>> upstream/main


export const Main = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/home' />
                <Route path='/todo' component ={Todo} />
                <Redirect to="/home" />
            </Switch>
            <DiaryPage />
        </div>
    )
}

export default Main