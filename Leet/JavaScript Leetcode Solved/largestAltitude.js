/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) 
{
    let sum = [];
    sum.push(0);
    for(let i = 0; i < gain.length; i++)
    {
        sum.push(sum[i] + gain[i]);
    };

    return Math.max(...sum);
};

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));