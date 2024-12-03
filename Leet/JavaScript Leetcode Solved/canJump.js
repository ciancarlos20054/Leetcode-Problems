var canJump = function(nums) 
{
    let n = nums.length-1;
    for(let i = nums.length-1; i >= 0; i--)
    {
        if(nums[i] >= n - i)
        {
            n = i;
        }
    }
    return n == 0;
};

console.log(canJump([2,3,1,1,4])); // true