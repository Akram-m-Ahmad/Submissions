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

app.listen(port, () =>
  console.log(`Server running at: http://localhost:${port}/`)
);
