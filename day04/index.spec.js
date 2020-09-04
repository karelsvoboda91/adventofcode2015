var day04 = require("./index.js");
var myObj = new day04();

var chai = require("chai").assert;


describe('DAY04', function(){


    it('find min hash 1', function(done){
      this.timeout(15000);
      chai.equal(myObj.minHash('abcdef'),609043);
      done();
    });

    it('find min hash 2', function(done){
      this.timeout(15000);
      chai.equal(myObj.minHash('pqrstuv'),1048970);
      done();
    });

    it('find min hash 3', function(done){
      this.timeout(15000);
      chai.equal(myObj.minHash('yzbqklnj'),282749);
      done();
    });

});