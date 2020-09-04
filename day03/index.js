class Day03{
    
  constructor(){}

  trasa(input){
      
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

      let unikatni = this.removeDups(positions)

      //console.log(unikatni.length);
      return(unikatni.length);
  }

  trasa2(input){
      
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
    
      let unikatni = this.removeDups(positions)

      return(unikatni.length);
  }

  removeDups(positions) {

      let unique = {};

      positions.forEach(function(i) 
      {
        if(!unique[i]) {
          unique[i] = true;
        }
      });
      return Object.keys(unique);
    }
}

module.exports = Day03;