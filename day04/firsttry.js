
var md5 = require('md5');


const input = "yzbqklnj";

let toHash;

let i = 1;
while(true){

    toHash = input + i;

    let hash = md5(toHash);



    if(hash.substr(0,5) == "00000")
    {
        console.log(i);
        console.log(hash);
        break;
    }
    

    i++
}




 
//console.log(md5('message'));