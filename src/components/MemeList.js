import React from "react";
import Meme from "./Meme";

const MemeList = ({ memes, onUpvote, onDownvote, onToggleStar }) => {
  return (
    <div className="meme-list">
      {memes.map((meme) => (
        <Meme
          key={meme.id}
          meme={meme}
          onUpvote={() => onUpvote(meme.id)}
          onDownvote={() => onDownvote(meme.id)}
          onToggleStar={() => onToggleStar(meme.id)}
        />
      ))}
    </div>
  );
};

export default MemeList;
