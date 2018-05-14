// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// =============================================================
// This route gets of ALL burers from server
  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

// =============================================================
// This route creates a new burger in db.Burger
  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    //   createdAt: ???????
        })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          devour: req.body.devour
        }
      }) 
      .then(function(dbBurger) {
        res.json(dbBurgerPost);
      });
  });
};



