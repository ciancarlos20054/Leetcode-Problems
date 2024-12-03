var lengthOfLIS = function(nums) 
{
    const n = nums.length;
    if(n === 0 || !nums) return 0;
    const sub = new Array(n).fill(1);
    function recurse(i = 1)
    {
        if(i === n) return;
        for(let j = 0; j < i; j++)
        {
            if(nums[j] < nums[i]) sub[i] = Math.max(sub[i], sub[j] + 1);
        }
        recurse(i + 1);
    }
    recurse();
    return Math.max(...sub);
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))