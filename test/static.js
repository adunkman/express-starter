// Simulate a production environment
process.env.NODE_ENV = "production";

var mocha = require("mocha"),
    app = require("../server"),
    request = require("supertest");

describe("static middleware", function () {
   it("returns a favicon", function (done) {
      request(app)
         .get("/favicon.ico")
         .expect(200)
         .end(done);
   });
});
