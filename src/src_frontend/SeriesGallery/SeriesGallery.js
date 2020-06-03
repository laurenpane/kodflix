import React from "react";
import Series from "../Series/Series.js";
import getGallery from "./GetGallery.js";
import "./SeriesGallery.css";
import netflix from "../Images/netflixLogo.png";
import BackendGallery from "../../src_backend/TVShows.js";

/*export default class SeriesGallery extends React.Component {
  constructor() {
    super();
    this.state = { id: {} };
  }

  render() {
    return (
      <div>
        <img src={netflix} alt="netflix" className="netflixLogo" />
        <h1 className="welcome">
          Click or hover over an image to discover more...
        </h1>
        <div className="container">
          {BackendGallery().map((show) => (
            <Series
              key={show.id}
              id={show.id}
              name={show.name}
              logo={show.logo}
              description={show.description}
              click={show.click}
            />
          ))}
        </div>
      </div>
    );
  }
}
*/
export default function SeriesGallery() {
  return (
    <div>
      <img src={netflix} alt="netflix" className="netflixLogo" />
      <h1 className="welcome">
        Click or hover over an image to discover more...
      </h1>
      <div className="container">
        {getGallery().map((show) => (
          <Series
            key={show.id}
            id={show.id}
            name={show.name}
            logo={show.logo}
            description={show.description}
            click={show.click}
          />
        ))}
      </div>
    </div>
  );
}
