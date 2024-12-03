/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) 
{
    nums.sort((a,b) => a - b);
    let sum = nums.reduce((a,b) => a + b);
    for(let i = nums.length - 1; i >= 2; i--)
    {
        sum -= nums[i];
        if(sum> nums[i]) return sum + nums[i];
    }

    return -1;
};

console.log(largestPerimeter([1,12,1,2,5,50,3])); // 5