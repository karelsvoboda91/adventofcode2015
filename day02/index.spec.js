var day02 = require("./index.js");
var myObj = new day02();

var chai = require("chai").assert;

fs = require('fs');


describe('DAY02', function(){

    it('Paper area calc 1', function(){

        chai.equal(myObj.PaperAreaCalc('2x3x4\n'),58);
    });

    it('Paper area calc 2', function(){

      chai.equal(myObj.PaperAreaCalc('1x1x10\n'),43);
    });

    it('Paper area calc 3', function(done){

      fs.readFile('./day02/input.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        chai.equal(myObj.PaperAreaCalc(data),1588178);
        done();
      });
    });

    it('Ribbon calc 1', function(){

      chai.equal(myObj.ribbonCalcAll('2x3x4\n'),34);
    });

    it('Ribbon calc 2', function(){

      chai.equal(myObj.ribbonCalcAll('1x1x10\n'),14);
    });

    it('Ribbon calc 3', function(done){

      fs.readFile('./day02/input.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        chai.equal(myObj.ribbonCalcAll(data),3783758);
        done();
      });
    });

});