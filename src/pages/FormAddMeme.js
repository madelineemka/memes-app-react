import React, { useState } from "react";

const FormAddMeme = ({ onAddMeme }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && file) {
      const newMeme = {
        title: title,
        img: URL.createObjectURL(file),
        upvotes: 0,
        downvotes: 0,
        isStarred: false,
      };
      onAddMeme(newMeme);
      setTitle("");
      setFile(null);
    } else {
      alert("Please enter a title and select an image.");
    }
  };

  return (
    <div className="addMeme">
      <h2>Add your meme</h2>
      <form onSubmit={handleSubmit}>
        <div className="memeTitle">
          <label>
            Meme Title:
            <input
              placeholder=" Meme Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="fileInput">
          <label>
            Upload meme:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
        <button className="addMemeBtn" type="submit">
          Add Meme
        </button>
      </form>
    </div>
  );
};

export default FormAddMeme;