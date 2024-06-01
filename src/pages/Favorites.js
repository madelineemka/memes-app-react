import React from "react";
import MemeList from "../components/MemeList";

const Favorites = ({ memes, onUpvote, onDownvote, onToggleStar}) => {
    const favoriteMemes = memes.filter((meme) => meme.isStarred);

    return (
        <div>
            <h2>Favorite Memes</h2>
            <MemeList
            memes={favoriteMemes}
            onUpvote={onUpvote}
            onDownvote={onDownvote}
            onToggleStar={onToggleStar}
            />
        </div>
    );
};

export default Favorites;