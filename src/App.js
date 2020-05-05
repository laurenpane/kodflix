import React from "react";
import shawshank from "./Images/shawshank.jpg";
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
      <p className="container">
        <img src={peepShow} />
        <img src={downton} />
        <img src={derryGirls} />
        <img src={explained} />
        <img src={louisT} />
        <img src={skins} />
      </p>
    </div>
  );
}

export default App;
