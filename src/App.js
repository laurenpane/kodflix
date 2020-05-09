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
        <Series name="Peep Show" logo={peepShow} />
        <Series name="Downton Abbey" logo={downton} />
        <Series name="Derry Girls" logo={derryGirls} />
        <Series name="Explained" logo={explained} />
        <Series name="Louis Thereoux" logo={louisT} />
        <Series name="Skins" logo={skins} />
      </div>
    </div>
  );
}

function Series(props) {
  return (
    <div className="item">
      <img src={props.logo} alt={`${props.name} logo`} className="poster" />
      <div className="overlay">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default App;
