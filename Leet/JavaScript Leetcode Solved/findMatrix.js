var findMatrix = function(nums) 
{
    const result = [];
    const obj = {};
    for(let i = 0; i < nums.length; i++)
    {
        if(!obj[nums[i]]) obj[nums[i]] = 0;
        obj[nums[i]]++;
    }

    function recurse()
    {
        const row = [];
        for(let key of Object.keys(obj))
        {
            if(obj[key] <= 0) continue;
            row.push(key);
            obj[key]--;
            if(obj[key] <= 0)
            {
                delete obj[key];
            }
        }
        result.push(row);
        if(Object.keys(obj).length > 0) recurse();
        return;
    }

    recurse();
    return result;
};

console.log(findMatrix([1,3,4,1,2,3,1]))