const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(express.json());

//db

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connectionString =
  "mongodb+srv://Akram:a111222333@clusterprime-mvjxv.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDb Connected"))
  .catch(err => console.log(err));

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;

exports.movie = function(req, res) {
  let movie = new movies({
    title: req.body.title,
    year: req.body.year,
    rating: req.body.rating
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};
//get

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
let arrT = [];
for (let i = 0; i < movies.length; i++) {
  arrT[i] = movies[i].title;
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

  let par = req.params.id;

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
//Create
app.get("/movies/add/title=:TITLE?&year=:YEAR?&rating=:RATING?", (req, res) => {
  if (req.params.TITLE && !isNaN(req.params.YEAR) && req.params.RATING) {
    movies.push({
      title: `${req.params.TITLE}`,
      year: `${req.params.YEAR}`,
      rating: `${req.params.RATING}`
    });

    res.json({
      status: 200,
      message: `ADDED`,
      data: `${
        movies[
          Object.keys(movies)
            .sort()
            .pop()
        ].title
      }`
    });
  } else if (req.params.TITLE || req.params.YEAR) {
    res.json({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  } else if (req.params.TITLE && req.params.YEAR) {
    movies.push({
      title: `${req.params.TITLE}`,
      year: `${req.params.YEAR}`,
      rating: `4`
    });
    res.json({
      status: 200,
      message: `ok`,
      data: `${
        movies[
          Object.keys(movies)
            .sort()
            .pop()
        ].title
      }`
    });
  } else {
    res.json({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  }
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

//update
app.get(
  "/movies/update/:id?&title=:NEW_TITLE?&rating=:NEW_RATING?",
  (req, res) => {
    let parrr = req.params.id;
    let newT = req.params.NEW_TITLE;
    let newRat = req.params.NEW_RATING;
    let rr = [];
    console.log(arrT);
    if (parrr && newT) {
      rr = arrT.splice(parrr, parrr, newT);
      res.json({ status: 200, message: `ok`, data: `${rr}` });
    } else if (parrr && newT && newRat) {
      rr1 = arrT.splice(parrr, parrr, newT, newRat);
      res.json({ status: 200, message: `ok`, data: `${rr1}` });
    } else {
      res.json({
        status: 404,
        error: true,
        message: `the movie ${r} does not exist`
      });
    }
  }
);

//delete
app.get("/movies/delete/:id?", (req, res) => {
  let parr = req.params.id;
  let r = [];
  if (parr) {
    r = arrR.splice(parr, 1);
    console.log(arrR);
    res.json({ status: 200, message: `ok`, data: `${r}` });
  } else {
    res.json({
      status: 404,
      error: true,
      message: `the movie ${r} does not exist`
    });
  }
});

//HTTP VERB
//get
app.get("/movies", (req, res) => {
  res.send(movies);
  console.log("s");
});
//post
app.post("/movies/post/", (req, res) => {
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.rating);
  const movie = {
    title: req.body.title,
    year: req.body.year,
    rating: req.body.rating
  };

  movies.push(movie);
  res.send(movies);
});

//put

app.put("/movies/put/:id", (req, res) => {
  let id = req.params.id;
  if (id >= 0 && id < movies.length) {
    for (test in req.query) {
      if (test === "title") {
        movies[id][test] = req.body[test];
      }
      if (test === "year") {
        movies[id][test] = req.body[test];
      }
      if (test === "rating") {
        movies[id][test] = req.body[test];
      }
    }
    res.json(movies);
  } else {
    res.json({ status: 404, error: true, message: `id ${id} doesn't exist` });
  }
});
//Delete

app.delete("/movies/delete/:id", (request, response) => {
  let contactId = request.params.id;

  let contact = movies.filter(contact => {
    return contact.id == contactId;
  })[0];

  const index = movies.indexOf(contact);

  movies.splice(index, 1);

  response.send(movies);
});

app.listen(port, () =>
  console.log(`Server running at: http://localhost:${port}/`)
);
