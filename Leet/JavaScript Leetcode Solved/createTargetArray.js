/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) 
{
    const arr = new Array(nums.length).fill(false);

    for(let i = 0; i < index.length; i++)
    {
        if(arr[index[i]])
        {
            for(let j = nums.length - 1; j > index[i]; j--)
            {
                arr[j] = arr[j - 1];
            }
            arr[index[i]] = nums[i];
            continue;
        }

        arr[index[i]] = nums[i];
    }

    return arr;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));