import React from "react";
import Meme from "./Meme";

const MemeList = ({ memes, onUpvote, onDownvote, onToggleStar }) => {
  return (
    <div className="meme-list">
      {memes.map((meme, index) => (
        <Meme
          key={index}
          meme={meme}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onToggleStar={onToggleStar}
        />
      ))}
    </div>
  );
};

export default MemeList;
