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
            <h2 className="posterTxt">Peep Show</h2>
          </div>
        </div>
        <div className="item">
          <img src={downton} className="poster" />
          <div className="overlay">
            <h2 className="posterTxt">Downton Abbey</h2>
          </div>
        </div>
        <div className="item">
          <img src={derryGirls} className="poster" />
          <div className="overlay">
            <h2 className="posterTxt">Derry Girls</h2>
          </div>
        </div>
        <div className="item">
          <img src={explained} className="poster" />
          <div className="overlay">
            <h2 className="posterTxt">Explained</h2>
          </div>
        </div>
        <div className="item">
          <img src={louisT} className="poster" />
          <div className="overlay">
            <h2 className="posterTxt">Louis Theroux</h2>
          </div>
        </div>
        <div className="item">
          <img src={skins} className="poster" />
          <div className="overlay">
            <h2 className="posterTxt">Skins</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
