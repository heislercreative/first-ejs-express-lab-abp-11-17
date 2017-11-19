var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Hello, World!"
  const favoriteThings = ["Code", "Music", "People"]

  resp.render("index", {
    "welcomeText": welcomeText,
    name: "Avi",
    colors: ["Red", "Yellow", "Blue"],
    favoriteThings: favoriteThings
  })
})

module.exports = app
