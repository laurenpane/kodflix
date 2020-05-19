import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry page not found</h1>
      <Link className="detailsLink" to="/">
        Back to homepage
      </Link>
    </div>
  );
}
