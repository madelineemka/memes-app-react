import React from "react";
import MemeList from "../components/MemeList";

const Hot = ({ memes, onUpvote, onDownvote, onToggleStar }) => {
  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  return (
    <div>
      <h2>Hot Memes</h2>
      <MemeList
        memes={hotMemes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        onToggleStar={onToggleStar}
      />
    </div>
  );
};

export default Hot;
