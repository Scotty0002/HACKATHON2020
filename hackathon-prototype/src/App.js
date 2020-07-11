import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import NavBar from "./Components/nav-bar";
import StartSection from "./Components/StartSection";
import VisualKeySection from "./Components/VisualKeySection";
import ResourceLinks from "./Components/ResourceLinks";
import About from "./Components/About";
import Ads from "./Components/Ads";
import Contact from "./Components/Contact";
import ColorChangeOptions from "./Components/ChangeColourOptions";

const App = () => {

  // useEffect = () => {

  // }

  const [backgroundColour, setBackgroundColour] = useState("white");

  const selectBackgroundColour = (colour) => {
    const testColour = "Red"
    
    
    if (colour === "Red"){
      setBackgroundColour("red")
    }
    else if (colour === "Orange"){
      setBackgroundColour("orange")
    }
    else if (colour === "Yellow"){
      setBackgroundColour("yellow")
    }
    else if (colour === "Green"){
      setBackgroundColour("green")
    }
    else if (colour === "Teal"){
      setBackgroundColour("teal")
    }
    else if (colour === "Blue"){
      setBackgroundColour("blue")
    }
    else if (colour === "Purple"){
      setBackgroundColour("purple")
    }
    else if (colour === "Pink"){
      setBackgroundColour("pink")
    }
    else if (colour === "Brown"){
      setBackgroundColour("brown")
    }
    else if (colour === "Grey"){
      setBackgroundColour("grey")
    }
    else if (colour === "White"){
      setBackgroundColour("white")
    }


 
    console.log("background colour", backgroundColour)
  };

  return (
    <div className={backgroundColour}>
      <NavBar />

      <ColorChangeOptions selectBackgroundColour={selectBackgroundColour} />

      <StartSection />

      <hr className="hor-rule"></hr>

      <VisualKeySection />

      <hr className="hor-rule"></hr>

      <ResourceLinks />

      <hr className="hor-rule"></hr>

      <About />

      <hr className="hor-rule"></hr>

      <Ads />

      <hr className="hor-rule"></hr>

      <Contact />
    </div>
  );
};

export default App;
