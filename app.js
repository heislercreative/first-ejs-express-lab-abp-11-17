var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const welcomeText = "Hello, World!"

  resp.render("index", {
    "welcomeText": welcomeText
  })
})

module.exports = app
