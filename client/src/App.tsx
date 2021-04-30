import React from "react";

import "./App.css";
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
    </div>
  );
}

export default App;
