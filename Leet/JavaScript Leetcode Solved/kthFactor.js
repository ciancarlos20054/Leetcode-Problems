/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) 
{
    let curr = 0;
    for(let i = 1; i < n/2; i++)
    {
        if(n % i === 0)
        {
            curr++;
            if(curr === k)
            {
                return i;
            }
        }
    }
    if(curr==1) return n;
    return -1;
};

console.log(kthFactor(7, 2))