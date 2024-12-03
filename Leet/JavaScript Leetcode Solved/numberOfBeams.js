var numberOfBeams = function(bank) {
    const n = bank.length;
    let beams = 0;
    let i = 0, j = 1;
    while(i < n-1)
    {
        let sum = 0;
        for(let k = 0; k < bank[i].length; k++)
        {
            sum += Number(bank[i][k]);
        }
        let nextSum = 0;
        if(i+j > n-1)
        {
            break;
        }
        for(let k = 0; k < bank[i+j].length; k++)
        {
            nextSum += Number(bank[i+j][k]);
        }
        if(sum === 0)
        {
            i++;
            continue;
        }
        if(nextSum === 0)
        {
            j++;
            continue;
        }
        beams += sum * nextSum;
        i++;
        j = 1;
    } 
    return beams;
};

console.log(numberOfBeams(["011001","000000","010100","001000"]))