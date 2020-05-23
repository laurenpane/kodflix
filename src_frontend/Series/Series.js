import React from "react";
import { Link } from "react-router-dom";
import "./Series.css";

export default function Series(props) {
  return (
    <Link to={`/${props.id}`} className="item">
      <img id="showLogo" src={props.logo} alt={`${props.name} logo`} />
      <div className="overlay">
        <div className="text">
          <h2 id="showName">{props.name}</h2>
        </div>
      </div>
    </Link>
  );
}
