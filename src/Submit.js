import React, { useState } from "react";

const Submit = ({ handlePOSTSubmit }) => {
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");

  const handleArtistChange = (e) => {
      setArtist(e.target.value);
  }

  const handleAlbumChange = (e) => {
      setAlbum(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
    handlePOSTSubmit(artist, album);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            placeholder="Enter Artist"
            onChange={handleArtistChange}
          />
        </div>
        <div className="field">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            name="album"
            placeholder="Enter Album"
            onChange={handleAlbumChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Submit;
