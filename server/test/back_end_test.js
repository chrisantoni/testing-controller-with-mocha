var mongoose = require('mongoose');
var configDB = require('../config/db')
mongoose.connect(configDB.url)

const chai = require('chai')
const should = chai.should()
const expect = chai.expect()
const chaiHttp = require('chai-http')
const assertArrays = require('chai-arrays')
const Memo = require('../model/memo')

chai.use(assertArrays)
chai.use(chaiHttp)

/*
TESTING MEMO CRUD OPERATIONS
*/
describe('remove database',function(){
  it('remove all data',function(done){
    Memo.remove({},function(err){
      done()
    })
  })
})

describe('testing index resources',function(){
  it('should return data blog json when post /memo',function(done){
    chai.request('http://localhost:3000').post('/memo')
    .send({
      memoID    : 1,
      title     : "Mocha",
      notes     : "Testing with mocha"
    })
    .end(function(err,res){
      res.should.have.status(200)
      res.body.memoID.should.to.exist
      done()
    })
  })

  it('should return data blog json when get /memo',function(done){
    chai.request('http://localhost:3000').get('/memo').end(function(err,res){
      res.body.should.have.deep.property('[0].memoID',1)
      done()
    })
  })

  it('should return data blog json when put /memo',function(done){
    chai.request('http://localhost:3000').put('/memo')
    .send({
      memoID:1,
      title: "Mocha",
      notes: "Testing with mocha and chai"
    })
    .end(function(err,res){
      res.should.have.status(200)
      res.body.title.should.equal("Mocha")
      done()
    })
  })

  it('should return data blog json when delete /memo',function(done){
    chai.request('http://localhost:3000').delete('/memo')
    .send({
      memoID :1
    })
    .end(function(err,res){
      res.should.have.status(200)
      done()
    })
  })
})
