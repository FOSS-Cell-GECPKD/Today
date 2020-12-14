import React from "react";
import NavBar from "./navbar/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import DiaryPage from "./diarypage/diary";
import Contact from "./Essentials/contact/Contact";
import Todo from "./todo/Todo";
export const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/home' />
        <Route exact path='/todo' component={Todo} />
        <Route exact path='/contactus' component={Contact} />
        <Redirect to='/home' />
      </Switch>
      <DiaryPage />
    </div>
  );
};

export default Main;
