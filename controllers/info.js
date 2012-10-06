var express = require("express"),
    app = module.exports = express();

app.get("/", function (req, res, next) {
   res.render("info/about.jade");
});