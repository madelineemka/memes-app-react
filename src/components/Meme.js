import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";

const Meme = ({ meme, onUpvote, onDownvote }) => {
  return (
    <div className="meme">
      <h3>{meme.title}</h3>
      <img src={meme.img} alt={meme.title} />
      <div className="voting">
        <div className="voteBtn">
          <button className="upVoteBtn" onClick={() => onUpvote(meme)}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button className="downVoteBtn" onClick={() => onDownvote(meme)}>
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>
        <p className="upVotePar">Upvotes: {meme.upvotes}</p>
        <p className="downVotePar">Downvotes: {meme.downvotes}</p>
      </div>
    </div>
  );
};

export default Meme;
