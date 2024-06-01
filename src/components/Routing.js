import React from "react";
import { Route, Routes } from "react-router-dom";
import Hot from "../pages/Hot";
import Regular from "../pages/Regular";
import FormAddMeme from "../pages/FormAddMeme";
import Favorites from "../pages/Favorites";

const Routing = ({ memes, onUpvote, onDownvote, onToggleStar, onAddMeme }) => (
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
      path="/favorites"
      element={
        <Favorites
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
    <Route
      path="/formAddMeme"
      element={<FormAddMeme onAddMeme={onAddMeme} />} />
  </Routes>
);

export default Routing;
