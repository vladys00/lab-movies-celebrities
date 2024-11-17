const router = require("express").Router();

const {createCelebrity,
  exportCelebrity

} = require('./celebrities.routes')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrities/create",createCelebrity);
router.post("/celebrities/create",exportCelebrity);

module.exports = router;
