import React from "react";
import "./App.css";
import peepShow from "./Images/peepShow.jpg";
import downton from "./Images/downton.jpg";
import derryGirls from "./Images/derryGirls.jpg";
import explained from "./Images/explained.jpg";
import louisT from "./Images/louisT.jpg";
import skins from "./Images/skins.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img src={peepShow} className="poster" />
          <div className="overlay">
            <h2>Peep Show</h2>
          </div>
        </div>
        <div className="item">
          <img src={downton} className="poster" />
          <div className="overlay">
            <h2>Downton Abbey</h2>
          </div>
        </div>
        <div className="item">
          <img src={derryGirls} className="poster" />
          <div className="overlay">
            <h2>Derry Girls</h2>
          </div>
        </div>
        <div className="item">
          <img src={explained} className="poster" />
          <div className="overlay">
            <h2>Explained</h2>
          </div>
        </div>
        <div className="item">
          <img src={louisT} className="poster" />
          <div className="overlay">
            <h2>Louis Theroux</h2>
          </div>
        </div>
        <div className="item">
          <img src={skins} className="poster" />
          <div className="overlay">
            <h2>Skins</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
