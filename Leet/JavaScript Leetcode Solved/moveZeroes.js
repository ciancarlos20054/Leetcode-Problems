/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length;
    let i = 0, j = n-1;
    while(i < j)
    {
        if(nums[i] < nums[j])
        {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j--;
        }
        else
        {
            i++;
        }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]