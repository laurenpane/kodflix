import React from "react";
import { Link } from "react-router-dom";
import "./Series.css";

export default function Series(props) {
  return (
    <Link to={`/${props.id}`} className="item">
      <img src={props.logo} alt={props.name} id="showLogo" />
      <div className="overlay">
        <div className="text">
          <h2 id="showName">{props.name}</h2>
          <p className="description">{props.description}</p>
          <p className="click">{props.click}</p>
        </div>
      </div>
    </Link>
  );
}
