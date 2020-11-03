const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(13337, () => console.log("server is up and running"));
