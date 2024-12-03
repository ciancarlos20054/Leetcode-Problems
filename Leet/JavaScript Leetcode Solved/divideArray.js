/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) 
{
    nums.sort((a,b) => a - b);
    const n = nums.length;
    const divided = [];

    let row = [];
    for(let i = 0; i < n; i++)
    {
        if(i === n - 1) 
        {
            row.push(nums[i]);
            divided.push(row);
            break;
        }
        if(row.length === 3)
        {
            divided.push(row);
            row = [];
            row.push(nums[i]);
        }
        else
        {
            row.push(nums[i]);
        }
    }

    for(const row of divided)
    {
        if(Math.abs(Math.max(...row) - Math.min(...row)) > k)
        {
            return [];
        }
    }

    return divided;
};
