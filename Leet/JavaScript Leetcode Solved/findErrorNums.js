/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) 
{
    let freq = {};
    const sub = [];
    for(let i = 0; i < nums.length; i++)
    {
        if(!freq[nums[i]]) freq[nums[i]] = 0;
        freq[nums[i]]++;
    }

    for(let i = 1; i <= nums.length; i++)
    {
        if(!freq[i]) sub.push(i);
        else if(freq[i] == 2) sub.unshift(i);
    }

    return sub;
};

console.log(findErrorNums([2,2,1]));