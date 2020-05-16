import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import getGallery from "../SeriesGallery/GetGallery.js";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tvShow: {},
    };
  }

  componentDidMount() {
    let tvShowId = this.props.match.params.details;
    let tvShow = getGallery().find((tvShow) => {
      return tvShow.id === tvShowId;
    });
    this.setState({ tvShow: tvShow });
  }

  render() {
    return (
      <div>
        <h1>{this.state.tvShow.name}</h1>
        <Link className="detailsLink" to="/">
          Back to homepage
        </Link>
      </div>
    );
  }
}
