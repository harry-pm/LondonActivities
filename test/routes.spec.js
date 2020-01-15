var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
const setupFile = require('../knexfile').test
var knex = require('knex')(setupFile)

var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
      knex.migrate.rollback()
      .then(function() {
        knex.migrate.latest()
        .then(function() {
          return knex.seed.run()
          .then(function() {
            done();
          });
        });
      });
    });
    
  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('GET /showall', function() {

    it('should return all shows', function(done) {
      chai.request(server)
      .get('/showall')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(4);
      res.body[0].should.have.property('id');
      res.body[0].id.should.equal(1);
      res.body[0].should.have.property('activity');
      res.body[0].activity.should.equal('Arcade');
      res.body[0].should.have.property('description');
      res.body[0].description.should.equal('Lovely arcade next to the Lakeside shopping center. They have a varitety of games and physical games with a bowling alley at the back. The piano tiles will cause hair-loss as my reactions are far superior to its ability to register hits');
      res.body[0].should.have.property('location');
      res.body[0].location.should.equal('Lakeside');
      done();
      });
    });

    
  });
});
