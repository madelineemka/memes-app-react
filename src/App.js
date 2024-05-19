import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MemesLogo from "./components/MemesLogo";
import Navigation from "./components/Navigation";
import MemeContainer from "./components/MemeContainer";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="menu">
          <MemesLogo />
          <Navigation />
        </div>
        <main>
          <MemeContainer>
            <Routing />
          </MemeContainer>
        </main>
      </Router>
    </div>
  );
}

export default App;
