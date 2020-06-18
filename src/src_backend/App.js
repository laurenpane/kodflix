const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const shows = require("./TVShows");
const path = require("path");

app.get("/TVShows", (req, res) => res.send(shows));

app.use(express.static(path.join(__dirname, "../../build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.get("/TVShows/:tvShowId", (req, res) => {
  dbo.collection("shows").findOne({ id: req.params.tvShowId }, (err, doc) => {
    if (err) throw err;
    res.send(doc);
  });
});
