import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";
import memesData from "./memesData";
import MemesLogo from "./components/MemesLogo";
import Navigation from "./components/Navigation";

const App = () => {
  const [memes, setMemes] = useState(memesData);

  const handleUpvote = (meme) => {
    const updatedMemes = memes.map((m) =>
      m.title === meme.title ? { ...m, upvotes: m.upvotes + 1 } : m
    );
    setMemes(updatedMemes);
  };

  const handleDownvote = (meme) => {
    const updatedMemes = memes.map((m) =>
      m.title === meme.title ? { ...m, downvotes: m.downvotes + 1 } : m
    );
    setMemes(updatedMemes);
  };

  return (
    <div className="App">
      <Router>
        <div className="menu">
          <MemesLogo />
          <Navigation />
        </div>
        <main>
          <Routes>
            <Route
              path="/hot"
              element={
                <Hot
                  memes={memes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                />
              }
            />
            <Route
              path="/regular"
              element={
                <Regular
                  memes={memes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                />
              }
            />
            <Route
              path="/"
              element={
                <Regular
                  memes={memes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
