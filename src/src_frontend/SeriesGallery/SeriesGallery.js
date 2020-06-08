import React, { useState } from "react";
import Series from "../Series/Series.js";
import "./SeriesGallery.css";
import netflix from "../Images/netflixLogo.png";

export default function SeriesGallery() {
  const [shows, setShows] = useState([]);
  fetch("/TVShows", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setShows(data));

  return (
    <>
      <img src={netflix} alt="netflix" className="netflixLogo" />
      <h1 className="welcome">
        Click or hover over an image to discover more...
      </h1>
      <div className="container">
        {shows.map((show) => (
          <Series
            key={show.id}
            id={show.id}
            name={show.name}
            description={show.description}
            click={show.click}
            logo={require(`../Images/${show.id}.jpg`)}
          />
        ))}
      </div>
    </>
  );
}
