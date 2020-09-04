
class Day04{
    
    constructor(){}
  
    minHash(input){       
        var md5 = require('md5');
        //const input = "yzbqklnj";
        let toHash;       
        let i = 1;
        while(true){
        
            toHash = input + i;     
            let hash = md5(toHash);

            if(hash.substr(0,5) == "00000")
            {
                //console.log(i);
                //console.log(hash);
                //break;
                return (i);
            }           
            i++
        }
    }
}

module.exports = Day04;