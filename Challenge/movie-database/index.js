const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello!"));

app.get("/test", (req, res) => {
  res.json({ status: 200, message: "ok" });
});

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

app.get("/time", (req, res) => {
  res.json({ status: 200, message: `${time}` });
});

app.get("/hello/:id?", function(req, res) {
  if (req.params.id) {
    res.json({ status: 200, message: `hello ,` + req.params.id });
  } else {
    res.console.error();
  }
});

app.get("/search=:se?", function(req, res) {
  if (req.params.se) {
    res.json({ status: 200, message: `ok`, data: req.params.se });
  } else {
    res.json({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});

app.listen(port, () =>
  console.log(`Server running at: http://localhost:${port}/`)
);
