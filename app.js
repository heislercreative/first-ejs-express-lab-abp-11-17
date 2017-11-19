var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Hello, World!"
  const favoriteThings = ["Code", "Music", "People"]

  resp.render("index", "Hello, World!")
})

module.exports = app
