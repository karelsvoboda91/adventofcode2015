class Day02{
    
    constructor(){}

    PaperAreaCalc(input)
    {
        let area = 0;
        let res = input.split("\n");

        for (let i= 0 ; i< res.length-1; i++)
        {
            let box =  res[i].split("x");
            area = area + this.boxCalculation(box[0],box[1],box[2]);
        }
        return area;
    }

    ribbonCalcAll(input)
    {
        let ribbon2 = 0;
        let res = input.split("\n");

        for (let i= 0 ; i< res.length - 1; i++)
        {
            let box =  res[i].split("x");
            ribbon2 = ribbon2 + this.ribbonCalc(parseInt(box[0]),parseInt(box[1]),parseInt(box[2]));
        }   
        return ribbon2;
    }

    boxCalculation(x,y,z)
    {
        let area = x*y*2 + x*z*2 + y*z*2;
        area = area + this.findSmaller(this.findSmaller(x*y,x*z),y*z);
        return area;
    }

     findSmaller(x , y)
    {
        if(x<y) return x;
        else return y;
    }

    ribbonCalc(x,y,z)
    {
        let ribbon = x*y*z;
        if(x<y)
        {
            ribbon = ribbon+x+x;
            ribbon = ribbon+2*this.findSmaller(y,z);
        }
        else
        {
            ribbon = ribbon+y+y;
            ribbon = ribbon+2*this.findSmaller(x,z);
        }

        return ribbon;
    }
}

module.exports = Day02;

//console.log(ribbonCalc(1,1,10));
/*
fs = require('fs');
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(PaperAreaCalc(data));
  console.log(ribbonCalcAll(data));
});
*/



