/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const freq = {};
    const n = nums.length;

    for(let i = 0; i < n; i++)
    {
        if(!freq[nums[i]]) freq[nums[i]] = 0;
        freq[nums[i]]++;
    }

    for(let i = 0; i < n; i++)
    {
        if(!freq[i]) return i;
    }
    return -1;
};

console.log(missingNumber([3,0,1])); // 2