import React from "react";
import "./Details.css";
import { Link, Redirect } from "react-router-dom";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      tvShow: {},
    };
  }

  componentDidMount() {
    let tvShowId = this.props.match.params.tvShowId;

    fetch("/rest/shows", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let tvShow = data.find((tvShow) => tvShow.id === tvShowId);
        this.setState({ tvShow: tvShow });
      });
  }

  render() {
    if (this.state.tvShow === undefined) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div className="Details">
          <h1 className="title">{this.state.tvShow.name}</h1>
          <img
            className="logo"
            src={this.state.tvShow.logo}
            alt={this.state.tvShow.name}
          />
          <h3 className="synopsis">{this.state.tvShow.info}</h3>
          <Link className="backToHome" to="/">
            {this.state.tvShow.link}
          </Link>
        </div>
      );
    }
  }
}
