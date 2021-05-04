import React from "react";

import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
// import Notebooks from './components/Notebooks/Notebooks';
import Notes from "./components/Notes/Notes";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ResponsiveDrawer from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      {/* <Notebooks /> */}
      <Notes />
      <ResponsiveDrawer />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
