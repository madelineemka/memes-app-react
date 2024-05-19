import React from "react";
import { Route, Routes } from "react-router-dom";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";

const Routing = ({ memes, onUpvote, onDownvote }) => (
  <Routes>
    <Route
      path="/hot"
      element={
        <Hot memes={memes} onUpvote={onUpvote} onDownvote={onDownvote} />
      }
    />
    <Route
      path="/regular"
      element={
        <Regular memes={memes} onUpvote={onUpvote} onDownvote={onDownvote} />
      }
    />
    <Route
      path="/"
      element={
        <Regular memes={memes} onUpvote={onUpvote} onDownvote={onDownvote} />
      }
    />
  </Routes>
);

export default Routing;
