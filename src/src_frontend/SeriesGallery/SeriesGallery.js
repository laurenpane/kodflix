import React from "react";
import Series from "../Series/Series.js";
import "./SeriesGallery.css";
import netflix from "../Images/netflixLogo.png";
import TVShows from "../../src_backend/TVShows.js";
import getGallery from "./GetGallery.js";

// export default class SeriesGallery extends React.Component {
//   constructor() {
//     super();
//     this.state = { show: {} };
//   }

//   render() {
//     return (
//       <div>
//         <img src={netflix} alt="netflix" className="netflixLogo" />
//         <h1 className="welcome">
//           Click or hover over an image to discover more...
//         </h1>
//         <div className="container">
//           {this.setState({ show:{ TVShows.map((TVShow) => TVShow.id) } })}
//           <Series
//             key={this.state.show.id}
//             id={this.state.show.id}
//             name={this.state.show.name}
//             logo={require(`../Images/${show.id}.jpg`)}
//             description={this.state.show.description}
//             click={this.state.show.click}
//           />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

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
