import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MemeContainer from "./MemeContainer";
import Routing from "./Routing";
import MemesLogo from "./components/MemesLogo";
import Navigation from "./components/Navigation";

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
