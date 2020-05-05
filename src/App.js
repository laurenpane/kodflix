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
          <img src={peepShow} />
        </div>
        <div className="item">
          <img src={downton} />
        </div>
        <div className="item">
          <img src={derryGirls} />
        </div>
        <div className="item">
          <img src={explained} />
        </div>
        <div className="item">
          <img src={louisT} />
        </div>
        <div className="item">
          <img src={skins} />
        </div>
      </div>
    </div>
  );
}

export default App;
