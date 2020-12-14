import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Main />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
