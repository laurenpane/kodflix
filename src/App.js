import React from "react";
import shawshank from "./Images/shawshank.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={shawshank} className="App-logo" alt="logo" />
        <p>Kodflix</p>
      </header>
    </div>
  );
}

export default App;
