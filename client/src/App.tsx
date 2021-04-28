import React from 'react';

import './App.css';
import Notebooks from './components/Notebooks/Notebooks';
import Notes from './components/Notes/Notes';
import ResponsiveDrawer from './components/Sidebar/Sidebar';



function App() {

  return (
    <div>
      <Notebooks />
      <Notes />
      <ResponsiveDrawer />
    </div>
  );
}

export default App;
