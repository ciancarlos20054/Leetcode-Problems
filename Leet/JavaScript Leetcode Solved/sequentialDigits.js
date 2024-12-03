/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) 
{
    const sequence = [1,2,3,4,5,6,7,8,9];

    let l = 0, i = 0;
    const subs = []
    while(i < sequence.length)
    {
        const subArray = sequence.slice(i, l+i);
        const sub = Number(subArray.join(""));
        if(l > sequence.length) break;
        if(subArray.length != l)
        {
            i = 0;
            l++;
            continue;
        };
        if(sub < low)
        {
            if(l === low.toString().length)
            {
                i++;
                continue;
            }
            l++;
            continue;
        }
        if(sub > high) break;
        subs.push(sub);
        i++;
    }

    return subs;
};

console.log(sequentialDigits(58, 155))