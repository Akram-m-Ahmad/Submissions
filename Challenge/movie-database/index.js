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

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
let arr = [];
for (let i = 0; i < movies.length; i++) {
  arr[i] = movies[i].title;
}

let arrR = [];
for (let i = 0; i < movies.length; i++) {
  arrR[i] = i;
}

let arrDate = [];

for (let i = 0; i < movies.length; i++) {
  arrDate[i] = movies[i].year;
}
let arrRate = [];

for (let i = 0; i < movies.length; i++) {
  arrRate[i] = movies[i].rating;
}

app.get("/movies/read/:id?", function(req, res) {
  //  console.log(req.params);
  //  console.log(req.query);
  let str = arrR.toString();
  console.log(str);
  let par = req.params.id;

  console.log(str.includes(par));

  if (par && str.includes(par)) {
    res.json({ status: 200, message: `ok`, data: `${arr}` });
  } else {
    res.json({
      status: 404,
      error: true,
      message: `the movie ${par} does not exist`
    });
  }
});

app.get("/movies/create", (req, res) => {
  res.json({ status: 200, data: `${time}` });
});
app.get("/movies/read", (req, res) => {
  res.json({ status: 200, data: `${arr}` });
});
app.get("/movies/read/by-date", (req, res) => {
  res.json({ status: 200, data: `${arrDate.sort()}` });
});
app.get("/movies/read/by-rating", (req, res) => {
  res.json({ status: 200, data: `${arrRate.sort()}` });
});

app.get("/movies/read/by-title", (req, res) => {
  res.json({ status: 200, data: `${arr.sort()}` });
});

app.get("/movies/update", (req, res) => {
  res.json({ status: 200, message: `${time}` });
});
app.get("/movies/delete", (req, res) => {
  res.json({ status: 200, message: `${time}` });
});

app.listen(port, () =>
  console.log(`Server running at: http://localhost:${port}/`)
);
