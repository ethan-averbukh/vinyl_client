import React, { useState } from "react";

const Submit = ({ handlePOSTSubmit }) => {
 
  const [vinyl, setVinyl] = useState({artist: "", album: ""})

  const handleChange = event => {
    event.persist()
    setVinyl(prevVinyl => {
      const editedVinyl = {...prevVinyl, 
        [event.target.name]: event.target.value}
      return editedVinyl
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(vinyl);
    handlePOSTSubmit(vinyl);
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
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            name="album"
            placeholder="Enter Album"
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Submit;
