const Nightmare = require('nightmare')
const should = require('chai').should()

describe('testing create memos',function(done){
  this.timeout(10000)
  it('should create memos and return ttile of the memos',function(done){
    var nightmare = Nightmare({show:true})
    nightmare
    .goto('http://127.0.0.1:8080/')
    .wait('#memoid')
    .click('#memoid')
    .type('#memoid',1)
    .wait('#title')
    .click('#title')
    .type('#title','nightmare')
    .wait('#note')
    .click('#note')
    .type('#note','testing nightmare')
    .wait('#post')
    .click('#post')
    .wait(1000)
    .evaluate(function(){
      return document.querySelector('#data1 td.title').innerHTML
    })
    .end()
    .then(function(result){
      result.should.equal('nightmare')
      done()
    }).catch(function(err){
      console.log(err);
    })
})
})


describe('testing update memos',function(done){
  this.timeout(10000)
it('should update and return updated value of the memos',function(done){
  var nightmare = Nightmare({show:true})
  nightmare
  .goto('http://127.0.0.1:8080/')
  .wait('#update1')
  .click('#update1')
  .wait('#title')
  .click('#title')
  .type('#title',' nightmare')
  .wait('#updateData')
  .click('#updateData')
  .wait(1000)
  .evaluate(function(){
    return document.querySelector('#data1 td.title').innerHTML
  })
  .end()
  .then(function(result){
    result.should.equal('nightmare nightmare')
    done()
  }).catch(function(err){
    console.log(err);
  })
})
})

describe('testing delete memo',function(done){
  this.timeout(10000)
it('should delete and return deleted value of the memo',function(done){
  var nightmare = Nightmare({show:true})
  nightmare
  .goto('http://127.0.0.1:8080/')
  .wait('#delete1')
  .click('#delete1')
  .wait(1000)
  .evaluate(function(){
    if(document.querySelector('#data1') === null) {
      return 'deleted'
    }
    else {
      return 'failed'
    }
  })
  .end()
  .then(function(result){
    console.log('should be null yeah : ', result);
    result.should.equal('deleted')
    done()
  }).catch(function(err){
    console.log(err);
  })
})
})
