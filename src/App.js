import React from "react";
import shawshank from "./Images/shawshank.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={shawshank} className="App-logo" alt="Shawshank Redemption" />
      </header>
      <p className="container">
        <h1 className="item">Peep Show</h1>
        <h1 className="item">Explained</h1>
        <h1 className="item">Downton Abbey</h1>
        <h1 className="item">Skins</h1>
        <h1 className="item">Derry Girls</h1>
        <h1 className="item">Louis Theroux</h1>
      </p>
    </div>
  );
}

export default App;
