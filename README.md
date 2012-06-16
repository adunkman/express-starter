# express-starter

This is a skeleton project for the start of a web app written on ExpressJS. It includes connect-assets to manage compilation of CSS and JavaScript, Jade as a templating engine, and CoffeeScript.

## Directories and notable files

 - express-starter
    - assets — Managed by connect-assets.
       - css — Anything that can be compiled to CSS (Stylus, SASS, LESS, etc).
          - pages — Page-specific styles here, using body classes to target specific views (see layout.jade).
       - js — Anything that can be compiled to JavaScript (CoffeeScript, Iced CoffeeScript, etc).
    - config — Application configuration, in JSON format (*.json).
    - controllers — Split your application into managable controllers and place them here. The special controller "host" should ".use" the other controllers where appropriate.
       - host.coffee — The main ExpressJS server.
    - public — Any additional public assets that aren't managed by connect-assets (images, files, etc).
    - test — Tests, because you test, of course.
    - views — Use folders inside of views which correspond to the controller name from which they are rendered.
       - layout.jade — The master layout for the application.
    - index.js — The entry point for the server (your command to start the server should be: <code>node index.js</code>).

## About the author

You can follow <a href="http://twitter.com/adunkman">@adunkman</a> on Twitter or <a href="https://github.com/adunkman">adunkman</a> on Github.
