import React from "react";
import "./Details.css";
import { Link, Redirect } from "react-router-dom";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tVShow: {},
    };
  }

  componentDidMount() {
    let tVShowId = this.props.match.params.tVShowId;

    fetch(`/TVShows/${tVShowId}`)
      .then((response) => response.json())
      .then((show) => {
        let thisShow = show.find((thisTVShow) => thisTVShow.id === tVShowId);
        this.setState({ tVShow: thisShow });
      });
  }

  render() {
    let TVShow = this.state.tVShow;
    return TVShow ? (
      <div className="Details">
        <h1 className="title">{TVShow.name}</h1>
        <img
          className="logo"
          src={require(`../Images/${TVShow.id}.jpg`)}
          alt={TVShow.name}
        />
        <h3 className="synopsis">{TVShow.info}</h3>
        <Link className="backToHome" to="/">
          {TVShow.link}
        </Link>
      </div>
    ) : (
      <Redirect to="/not-found" />
    );
  }
}
