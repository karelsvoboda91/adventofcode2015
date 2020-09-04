function floorCalc (input)
{
    let floor = 0;
    let first = true;

    for(let i = 0; i< input.length ; i++)
    {
        if(input[i]==")")
        {
            floor--;
        }
        if(input[i]=="(")
        {
            floor++;
        }
        if(floor <0 && first)
        {
            console.log((i+1));
            first = false;
        }
    }
    return floor;
}

fs = require('fs');
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(floorCalc(data))
});

