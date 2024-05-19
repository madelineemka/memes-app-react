import React from "react";
import { Route, Routes } from "react-router-dom";
import Hot from "../pages/Hot";
import Regular from "../pages/Regular";
import FormAddMeme from "../pages/FormAddMeme";

const Routing = ({ memes, onUpvote, onDownvote, onToggleStar }) => (
  <Routes>
    <Route
      path="/hot"
      element={
        <Hot
          memes={memes}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onToggleStar={onToggleStar}
        />
      }
    />
    <Route
      path="/regular"
      element={
        <Regular
          memes={memes}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onToggleStar={onToggleStar}
        />
      }
    />
    <Route
      path="/"
      element={
        <Regular
          memes={memes}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onToggleStar={onToggleStar}
        />
      }
    />
    <Route path="/formAddMeme" element={<FormAddMeme />} />
  </Routes>
);

export default Routing;
