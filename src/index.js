const express = require("express");

const app = express();

app.get("/", (req, res) => {
  req.send(console.log("Hello Luís!"));
});

app.listen(3001);
