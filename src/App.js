import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SeriesGallery from "./SeriesGallery/SeriesGallery.js";
import Details from "./Details/Details.js";
import NotFound from "./NotFound.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SeriesGallery} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/:tvShowId" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
