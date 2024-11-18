const router = require("express").Router();

const {
  createCelebrity,
  exportCelebrity,
  showCelebrities,
  
} = require("./celebrities.routes");

const { 
  createMovie,
   exportMovie,
   showMovies } = require("./movies.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrities/create", createCelebrity);
router.post("/celebrities/create", exportCelebrity);
router.get("/celebrities", showCelebrities);
router.get("/movies/create", createMovie);
router.post("/movies/create", exportMovie);
router.get("/movies",showMovies);
module.exports = router;
