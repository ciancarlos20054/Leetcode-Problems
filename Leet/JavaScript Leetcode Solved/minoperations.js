// var generateParenthesis = function(n) 
// {
    
// };

// console.log(generateParenthesis(3))

var minOperations = function(nums) {
  const freq = {};
  for(let i = 0; i < nums.length; i++)
  {
      if(!freq[nums[i]]) freq[nums[i]] = 0;
      freq[nums[i]]++;
  }

  let count = 0;

  for(const f of Object.values(freq))
  {
      if(f === 1) return -1;
      if(f % 3 === 1 || f % 3 === 2) count++;
      count += Math.floor(f / 3);
  }

  return count === 0 ? -1 : count;
};

minOperations([2,3,3,2,2,4,2,3,4])