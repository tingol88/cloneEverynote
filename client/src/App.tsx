import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { store } from "./redux/store";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
// import Notebooks from './components/Notebooks/Notebooks';
import { Notes } from "./components/Notes/Notes";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ResponsiveDrawer from "./components/Sidebar/Sidebar";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import Authors from "./components/Authors/Authors";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <ResponsiveDrawer />
          <Switch>
            <Route path="/add-note">
              <AddNoteForm />
            </Route>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/authors">
              <Authors />
            </Route>
            <Redirect to="/" />
          </Switch>
          {/* <Notebooks /> */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
