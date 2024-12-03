/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) 
{
    let min = 0;
    let freq = {};
    for(const c of s)
    {
        if(!freq[c]) freq[c] = 0;
        freq[c]++;
    }

    let tFreq = {};
    for(const c of t)
    {
        if(!tFreq[c]) tFreq[c] = 0;
        tFreq[c]++;
    }
    
    for(const c in freq)
    {
        if(!tFreq[c]) min += freq[c];
        else if(freq[c] > tFreq[c]) min += freq[c] - tFreq[c];
    }

    return min;
};

console.log(minSteps("leetcode", "practice"));