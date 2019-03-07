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
  it('should respond to requests with correct set data', (done) =>{
    chai.request(server)
    .get('/top')
    .end(function(err, res){
      expect(res.body.sets[0]).to.contain.all.keys('id');
      expect(res.body.sets[0]).to.contain.all.keys('title');
      expect(res.body.sets[0]).to.contain.all.keys('video_link');
      expect(res.body.sets[0]).to.contain.all.keys('set_time');
      expect(res.body.sets[0]).to.contain.all.keys('views');
      expect(res.body.sets[0]).to.contain.all.keys('like_data');
      done();
    });
  });
});
