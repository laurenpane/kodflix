import React from "react";
import "./Details.css";
import { Link, Redirect } from "react-router-dom";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tVShow: {},
      dataLoaded: false,
    };
  }

  componentDidMount() {
    let tvShowId = this.props.match.params.tvShowId;

    fetch(`/TVShows/${tvShowId}`)
      .then((response) => response.json())
      .then((show) => {
        let thisShow = show.find((thisTVShow) => thisTVShow.id === tvShowId);
        this.setState({ tVShow: thisShow, dataLoaded: true });
      });
  }

  render() {
    return this.state.tVShow === undefined ? (
      <Redirect to="/not-found" />
    ) : !this.state.dataLoaded ? (
      <div>Information loading...</div>
    ) : (
      <div className="Details">
        <h1 className="title">{this.state.tVShow.name}</h1>
        <img
          className="logo"
          src={require(`../Images/${this.state.tVShow.id}.jpg`)}
          alt={this.state.tVShow.name}
        />
        <h3 className="synopsis">{this.state.tVShow.info}</h3>
        <Link className="backToHome" to="/">
          {this.state.tVShow.link}
        </Link>
      </div>
    );
  }
}
