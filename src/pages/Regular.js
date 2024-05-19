import React from "react";
import MemeList from "../components/MemeList";

const Regular = ({ memes, onUpvote, onDownvote, onToggleStar }) => {
  const regularMemes = memes.filter(
    (meme) => meme.upvotes - meme.downvotes <= 5
  );

  return (
    <div>
      <h2>Regular Memes</h2>
      <MemeList
        memes={regularMemes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        onToggleStar={onToggleStar}
      />
    </div>
  );
};

export default Regular;
