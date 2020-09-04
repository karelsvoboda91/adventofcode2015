

function trasa(input){
    


    let positions = [];
    positions=[[0,0]];

    let positionx =0;
    let positiony =0;


    for(let i = 0; i < input.length ; i++)
    {
        if(input[i] == '<') positionx--;
        if(input[i] == '>') positionx++;
        if(input[i] == '^') positiony++;
        if(input[i] == 'v') positiony--;

        positions.push([positionx,positiony]);
    }
   
    //console.log(positions);
    
    let unikatni = removeDups(positions)
    //console.log(unikatni);


    console.log(unikatni.length);



}


function trasa2(input){
    
    let santa = true;

    let positions = [];
    positions=[[0,0]];

    let positionx =0;
    let positiony =0;

    let positionx2 =0;
    let positiony2 =0;


    for(let i = 0; i < input.length ; i++)
    {
        if(santa){
            if(input[i] == '<') positionx--;
            if(input[i] == '>') positionx++;
            if(input[i] == '^') positiony++;
            if(input[i] == 'v') positiony--;
            positions.push([positionx,positiony]);
            santa= false;
        }
        else
        {
            if(input[i] == '<') positionx2--;
            if(input[i] == '>') positionx2++;
            if(input[i] == '^') positiony2++;
            if(input[i] == 'v') positiony2--;
            positions.push([positionx2,positiony2]);
            santa= true;
        }
    }
   
    //console.log(positions);
    
    let unikatni = removeDups(positions)
    //console.log(unikatni);




    console.log(unikatni.length);

}



function removeDups(positions) {

    let unique = {};

    positions.forEach(function(i) 
    {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }








//trasa2("^v^v^v^v^v");

/*
fs = require('fs');
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
trasa(data);
});
*/

fs = require('fs');
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
trasa2(data);
});


