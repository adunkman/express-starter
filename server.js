var config = require("./config"),
    express = require("express"),
    http = require("http"),
    jade = require("jade"),
    connectAssets = require("connect-assets");

var app = module.exports = express(),
    server = http.createServer(app);

app.configure("development", function () {
   app.use(express.logger("dev"));
   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure("production", function () {
   app.use(express.errorHandler());
});

// View configuration
app.set("view engine", "jade");
app.engine("jade", jade.__express);

// Middleware
app.use(connectAssets());
app.use(express.static(__dirname + "/public"));
app.use(require("./middleware/bodyClass"));

// Controllers
app.use(require("./controllers/info"));

if (require.main === module) {
   server.listen(config.port, function () {
      console.log("Express application booted, listening on %s.", config.port);
   });
}