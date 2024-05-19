import React, { useState } from "react";
import memesData from "./memesData";
import Hot from "./pages/Hot";
import Regular from "./pages/Regular";

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

  return React.cloneElement(children, {
    memes,
    onUpvote: handleUpvote,
    onDownvote: handleDownvote,
  });
};

export default MemeContainer;
