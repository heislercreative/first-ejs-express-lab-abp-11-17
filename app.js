var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Welcome to HTML"
  resp.render("index")
})

module.exports = app
