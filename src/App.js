import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SeriesGallery from "./SeriesGallery/SeriesGallery.js";
import Details from "./Details/Details.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SeriesGallery} />
        <Route exact path="/:details" component={Details} />
      </div>
    </Router>
  );
}
