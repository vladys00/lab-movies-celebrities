// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

module.exports.createCelebrity = (req, res, next) => {
  res.render("celebrities/new-celebrity");
};

module.exports.exportCelebrity = (req, res, next) => {
  Celebrity.create(req.body)
    .then((clebrityCreated) => {
      console.log(clebrityCreated);
      res.redirect("/");
    })
    .catch((err) => next(err));
};

module.exports.showCelebrities = (req,res,next) => {
    Celebrity.find()
    .then((celebrities)=>{
        res.render("celebrities/celebrities", {celebrities})
    })
    .catch((err)=>next(err));
};
 