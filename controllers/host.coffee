express = require "express"
config = require "../config/app"
port = process.env.PORT || config.defaultPort
app = express.createServer()

# Settings
app.set "view engine", "jade"
app.set "view options", layout: false

app.configure "development", () ->
   app.use express.logger "dev"
   app.use express.errorHandler { dumpExceptions: true, showStack: true }

app.configure "production", () ->
   app.use express.errorHandler()

# Middleware
app.use require("connect-assets")()
app.use express.static __dirname + "/../public"

# Controllers
app.use require "./info"

# Listen
app.listen port
console.log "Express application booted, listening on #{port}."