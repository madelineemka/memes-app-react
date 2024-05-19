import React from "react";

const Meme = ({ meme, onUpvote, onDownvote }) => {
  return (
    <div className="meme">
      <h3>{meme.title}</h3>
      <img src={meme.img} alt={meme.title} />
      <div>
        <button onClick={() => onUpvote(meme)}>Upvote</button>
        <button onClick={() => onDownvote(meme)}>Downvote</button>
        <p>Upvotes: {meme.upvotes}</p>
        <p>Downvotes: {meme.downvotes}</p>
      </div>
    </div>
  );
};

export default Meme;
