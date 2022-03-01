import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Submit from "./Submit.js";

function App() {
  const [vinylData, setVinylData] = useState([]);

  const handleOnButtonClick = async(e) => {
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/vinyls");
    const apiData = await response.data;
    setVinylData(apiData);
    console.log(apiData);
  };
  const handlePOSTCall = async(e, artistInput, albumInput) => {
    e.preventDefault();
    try{
    const response = await axios.post("http://localhost:3000/vinyls", {
      artists: artistInput,
      album: albumInput
    });
    const postedData = await response.data;
    console.log(postedData);
    } catch (err) {
      console.log(err);
    }
    

  }

  const vinyls = vinylData.vinyls?.map((item,index) => {
    return(
      <div key={index}>
        <h1>{item.artists}</h1>
        <h3>{item.album}</h3>
      </div>
    )
  })
  return (
    <div className="App">
      <button className="api-button" onClick={handleOnButtonClick}>
        Request Data
      </button>
      <div>{vinyls}</div>
      <Submit handlePOSTSubmit={handlePOSTCall}></Submit>
    </div>
  );
}

export default App;
