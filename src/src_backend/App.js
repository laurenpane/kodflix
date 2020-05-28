const express = require("express");
const app = express();
const port = 3001;
const shows = require("./TVShows");

app.get("/rest/TVShows", (req, res) => res.send(shows.TVShows));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
