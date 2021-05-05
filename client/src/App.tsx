import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store.js";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
// import Notebooks from './components/Notebooks/Notebooks';
import Notes from "./components/Notes/Notes";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ResponsiveDrawer from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Notebooks /> */}
        <Notes />
        <ResponsiveDrawer />
        <RegisterForm />
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
