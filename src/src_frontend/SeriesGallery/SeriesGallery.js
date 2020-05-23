import React from "react";
import Series from "../Series/Series.js";
import getGallery from "./GetGallery.js";
import "./SeriesGallery.css";

export default function SeriesGallery() {
  return (
    <div>
      <h1 className="welcome">Hover over an image to discover more...</h1>
      <div className="container">
        {getGallery().map((show) => (
          <Series
            key={show.id}
            id={show.id}
            name={show.name}
            logo={show.logo}
          />
        ))}
      </div>
    </div>
  );
}
