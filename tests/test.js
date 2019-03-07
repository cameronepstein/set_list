import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import App from '../src/App.js';

const chai = require('chai');
const expect = chai.expect;
const chaihttp = require('chai-http')
const server = require('../server/index.js');

let should = chai.should();
chai.use(chaihttp);

describe('Server', ()=>{
  it('should respond to requests with Boiler Room set data', (done) =>{
    chai.request(server)
    .get('/top')
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(res.body.sets).to.be.an('array');
      expect(res.body.sets).to.have.length(3);
      done();
    });
  });
});
