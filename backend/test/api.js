let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

let server = require("../app");
chai.use(chaiHttp);

describe("API", () => {
  describe("GET /", () => {
    it("Should get response 'api done'", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.eq("api done");
          done();
        });
    });
  });
});
