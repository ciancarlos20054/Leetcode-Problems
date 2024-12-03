/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) 
{
    let freq = {};
    for(const char of s)
    {
        if(!freq[char]) freq[char] = 0;
        freq[char]++;
    }

    freq = Object.entries(freq).sort((a,b) => b[1] - a[1]);
    let result = "";
    for(const char of Object.keys(freq))
    {
        while(freq[char] > 0)
        {
            result += char;
            freq[char]--;
        }
    }

    return result;
};