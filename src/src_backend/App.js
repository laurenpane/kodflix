const express = require("express");
const app = express();
const port = 3001;
const shows = require("./TVShows");
const fetch = require("node-fetch");

fetch("http://localhost:3001/rest/TVShows")
  .then((response) => response.json())
  .then((data) => console.log(data));

app.get("/rest/TVShows", (req, response) => response.send(shows.TVShows));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
