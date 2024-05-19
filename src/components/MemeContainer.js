import React, { useState } from "react";
import memesData from "../memesData";

const MemeContainer = ({ children }) => {
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

  const toggleStar = (meme) => {
    const updatedMemes = memes.map((m) =>
      m.title === meme.title ? { ...m, isStarred: !m.isStarred } : m
    );
    setMemes(updatedMemes);
  };

  return React.cloneElement(children, {
    memes,
    onUpvote: handleUpvote,
    onDownvote: handleDownvote,
    onToggleStar: toggleStar,
  });
};

export default MemeContainer;
