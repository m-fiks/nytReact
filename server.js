const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
//const articlesController = require("./controllers/articlesController")
const db = require("./models");
//const apiRoutes = require("./routes/api/articles.js");
app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
//app.use("/api", apiRoutes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.get("/api/articles", (req,res) => {
  db.Article
        .find({saved: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

//save articles
app.post("/api/articles", (req,res) => {
  //console.log(req.body)
  db.Article
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422))
})

app.listen(PORT, function() {
    console.log(`now listening on PORT ${PORT}!`);
});