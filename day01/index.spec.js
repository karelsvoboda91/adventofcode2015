var day01 = require("./index.js");
var myObj = new day01();

var chai = require("chai").assert;

fs = require('fs');


describe('DAY01', function(){

    it('Floor calculation 1', function(){

        chai.equal(myObj.floorCalc('(())'),0);
    });

    it('Floor calculation 2', function(){

      chai.equal(myObj.floorCalc('()()'),0);
    });

    it('Floor calculation 3', function(){

    chai.equal(myObj.floorCalc('((('),3);
    });

    it('Floor calculation 4', function(){

      chai.equal(myObj.floorCalc('(()(()('),3);
    });

    it('Floor calculation 5', function(){

      chai.equal(myObj.floorCalc('))((((('),3);
    });

    it('Floor calculation 6', function(){

      chai.equal(myObj.floorCalc('())'),-1);
    });

    it('Floor calculation 7', function(){

      chai.equal(myObj.floorCalc('))('),-1);
    });

    it('Floor calculation 8', function(){

      chai.equal(myObj.floorCalc(')))'),-3);
    });

    it('Floor calculation 9', function(){

      chai.equal(myObj.floorCalc(')())())'),-3);
    });

    it('Floor calculation 10', function(done){

      fs.readFile('./day01/input.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        chai.equal(myObj.floorCalc(data),232);
        done();
      });
      
    });

    it('Basement calculation 1', function(){

      chai.equal(myObj.basementCalc(')'),1);
    });

    it('Basement calculation 2', function(){

      chai.equal(myObj.basementCalc('()())'),5);
    });

    it('Basement calculation 3', function(done){

      fs.readFile('./day01/input.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        chai.equal(myObj.basementCalc(data),1783);
        done();
      });
      
    });

});