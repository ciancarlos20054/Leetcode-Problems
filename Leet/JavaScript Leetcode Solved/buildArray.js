/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) 
{
    const arr = new Array(nums.length).fill(0);

    for(let i = 0; i < nums.length; i++)
    {
        arr[i] = nums[nums[i]];
    }

    return arr;
};

console.log(buildArray([0,2,1,5,3,4]));