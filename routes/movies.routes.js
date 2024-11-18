const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

module.exports.createMovie = (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    res.render("movies/new-movie", { celebrities });
  })
  .catch((err) => next(err));
  };
  
  module.exports.exportMovie = (req, res, next) => {
    Movie.create(req.body)
      .then((movieCreated) => {
        
        console.log(movieCreated);
        res.redirect("/");
      })
      .catch((err) => next(err));
  };
  module.exports.showMovies = (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render("movies/movies", { movies });
      })
      .catch((err) => next(err));
  };