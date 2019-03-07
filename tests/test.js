const chai = require('chai');
const expect = chai.expect;
const chaihttp = require('chai-http')
const server = require('../server/index.js');

let should = chai.should();
chai.use(chaihttp);

describe('Server', ()=>{
  it('should respond to requests', (done) =>{
    chai.request(server)
    .get('/top')
    .end(function(err, res){
      expect(res).to.have.status(200);
      done();
    });
  });
  it('should respond to requests with Boiler Room set array', (done) =>{
    chai.request(server)
    .get('/top')
    .end(function(err, res){
      expect(res.body.sets).to.be.an('array');
      done();
    });
  });
  it('should respond to requests with three sets', (done) =>{
    chai.request(server)
    .get('/top')
    .end(function(err, res){
      expect(res.body.sets).to.have.length(3);
      done();
    });
  });
});
