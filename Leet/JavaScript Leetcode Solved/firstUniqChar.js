/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) 
{
    const freq = {};
    for(const char of s)
    {
        if(!freq[char]) freq[char] = 0;
        freq[char]++;
    }

    for(let i = 0; i < s.length; i++)
    {
        if(freq[s[i]] === 1) return i;
    }

    return -1;
};