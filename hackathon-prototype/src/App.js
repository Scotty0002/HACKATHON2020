import React, {useState} from 'react';
import logo from './logo.svg';

import NavBar from "./Components/nav-bar";
import StartSection from "./Components/StartSection";
import VisualKeySection from "./Components/VisualKeySection";
import ResourceLinks from "./Components/ResourceLinks";

function App() {


  return (
    <div className="App">
      <NavBar/>
      <StartSection/>

      <hr className="hor-rule"></hr>

      <VisualKeySection/>

      <hr className="hor-rule"></hr>

      <ResourceLinks/>

      <hr className="hor-rule"></hr>
      
    </div>
  );
}

export default App;
