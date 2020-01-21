const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ok"));

app.listen(port, () =>
  console.log(`Server running at: http://localhost:${port}/`)
);

app.get("/quit", function(req, res) {
  res.send("closing..");
  app.close();
});
