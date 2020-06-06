const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const shows = require("./TVShows");
const path = require("path");

app.get("/rest/TVShows", (req, res) => res.send(shows.TVShows()));

app.use(express.static(path.join(__dirname, "../../build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
