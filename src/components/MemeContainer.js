import React, { useState } from "react";
import memesData from "../memesData";

const MemeContainer = ({ children }) => {
  const [memes, setMemes] = useState(memesData);

  const handleUpvote = (id) => {
    const updatedMemes = memes.map((m) =>
      m.id === id ? { ...m, upvotes: m.upvotes + 1 } : m
    );
    setMemes(updatedMemes);
  };

  const handleDownvote = (id) => {
    const updatedMemes = memes.map((m) =>
      m.id === id ? { ...m, downvotes: m.downvotes + 1 } : m
    );
    setMemes(updatedMemes);
  };

  const toggleStar = (id) => {
    const updatedMemes = memes.map((m) =>
      m.id === id ? { ...m, isStarred: !m.isStarred } : m
    );
    setMemes(updatedMemes);
  };

  const addMeme = (newMeme) => {
    const newId = memes.length + 1;
    setMemes([...memes, { ...newMeme, id: newId}]);
  };

  return React.cloneElement(children, {
    memes,
    onUpvote: handleUpvote,
    onDownvote: handleDownvote,
    onToggleStar: toggleStar,
    onAddMeme: addMeme,
  });
};

export default MemeContainer;
