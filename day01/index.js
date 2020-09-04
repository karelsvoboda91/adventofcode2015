class Day01{
    
    constructor(){}

    floorCalc (input)
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
                first = false;
            }
        }
        return floor;
    }

    basementCalc (input)
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
                return i+1;
            }
        }        
    }
}

module.exports = Day01;