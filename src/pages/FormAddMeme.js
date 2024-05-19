import React, { useState } from "react";

const FormAddMeme = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !file) return;
  };

  return (
    <div className="addMeme">
      <h2>Add your meme</h2>
      <form onSubmit={handleSubmit}>
        <div className="memeTitle">
          <label htmlFor="title">Meme title: </label>
          <input
            placeholder=" Meme Title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="fileInput">
          <label htmlFor="file">Upload file: </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button className="addMemeBtn" type="submit">
          Add Meme
        </button>
      </form>
    </div>
  );
};

export default FormAddMeme;
