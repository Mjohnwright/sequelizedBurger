// *** Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");

//Sets up express app
var PORT = process.env.PORT || 3000;
var app = express();

// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json 
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory.
app.use(express.static("./public"));



//ROUTES
// =============================================================
// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


