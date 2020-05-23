import React from "react";
import Series from "../Series/Series.js";
import getGallery from "./GetGallery.js";

export default function SeriesGallery() {
  return (
    <div>
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
