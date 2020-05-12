import React from "react";
import { Link } from "react-router-dom";

export default function Series(props) {
  return (
    <Link to={`/${props.id}`} className="item">
      <img src={props.logo} alt={`${props.name} logo`} />
      <div className="overlay">
        <div className="text">
          <h2>{props.name}</h2>
        </div>
      </div>
    </Link>
  );
}
