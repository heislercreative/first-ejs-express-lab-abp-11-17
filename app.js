var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  const viewData = {}
  resp.render("viewfile name", viewData)
})

module.exports = app
