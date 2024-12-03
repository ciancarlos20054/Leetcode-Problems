/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const perm =[[1,2,3], [1,3,2], [2,1,3], [2,3,1],[3,1,2],[3,2,1]];

    function matches(arr)
    {
        for(let j = 0; j < perm.length; j++)
        {
            const p = perm[j];
            let equal = false;
            for(let i = 0; i < arr.length; i++)
            {
                if(p[i] !== arr[i]) break;
                if(i === arr.length-1) equal = true;   
            }

            if(equal) return j;
        }
    }
    let index = matches(nums);
    if(index + 1 > perm.length-1)
    {
        for(let i = 0; i < perm[0].length; i++)
        {
            nums[i] = perm[0][i];
        }

        return nums;
    }
    const nextPerm = perm[index+1];
    for(let i = 0; i < nextPerm.length; i++)
    {
        nums[i] = nextPerm[i];
    }
    return nums;
};

console.log(nextPermutation([1,1,5])); // [1,3,2]

//NEEDS FIXING