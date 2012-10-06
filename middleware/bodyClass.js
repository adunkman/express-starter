module.exports = function (req, res, next) {
   var render = res.render;

   res.render = function () {
      var viewName = arguments[0],
          withoutExtension = viewName.replace(/\.[a-z]+$/i, ""),
          bodyClass = withoutExtension.replace(/\//g, "-");

      res.locals.bodyClass = bodyClass;
      render.apply(this, arguments);
   };

   next();
};