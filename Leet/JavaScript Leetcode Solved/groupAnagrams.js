/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) 
{
    const arr = [];

    for(const str of strs)
    {
        const s = str.split("").sort().join("");
        for(let i = 0; i < strs.length; i++)
        {
            const item = strs[i].split("").sort().join("");

            if(s === item)
            {
                if(!arr[i]) arr[i] = [];
                arr[i].push(str);
                break;
            }
        }
    }

    return arr.filter(a => a.length > 0);
};

Number.MAX_SAFE_INTEGER
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));