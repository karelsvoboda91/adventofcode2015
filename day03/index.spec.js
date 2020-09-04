var day03 = require("./index.js");
var myObj = new day03();

var chai = require("chai").assert;

fs = require('fs');

describe('DAY03', function(){

    it('Number of houses 1', function(){

        chai.equal(myObj.trasa('>'),2);
    });

    it('Number of houses 2', function(){

      chai.equal(myObj.trasa('^>v<'),4);
    });

    it('Number of houses 2', function(){

      chai.equal(myObj.trasa('^v^v^v^v^v'),2);
    });

    it('Number of houses 3', function(done){

      fs.readFile('./day03/input.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        chai.equal(myObj.trasa(data),2592);
        done();
      });
    });  

    it('Number of houses with robosanta 1', function(){

      chai.equal(myObj.trasa2('^v^v^v^v^v'),11);
    });

    it('Number of houses with robosanta 2', function(done){

      fs.readFile('./day03/input.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        chai.equal(myObj.trasa2(data),2360);
        done();
      });
    });  

});