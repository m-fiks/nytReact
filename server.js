const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const db = require("./models");
app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);



app.get("/api/articles", (req,res) => {
  db.Art
      .find({}).limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
})

//save Arts
app.post("/api/articles", (req,res) => {
  //console.log(req.body)
  db.Art
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422))
})

app.delete("/api/articles/:id", (req,res) => {
  console.log(req.params)
  db.Art
  .findById({_id: req.params.id})
  .then(dbModel => dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
})

app.listen(PORT, function() {
    console.log(`now listening on PORT ${PORT}!`);
});