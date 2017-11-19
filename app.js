var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const viewData = {}
  resp.render("index", viewData)
})

module.exports = app
