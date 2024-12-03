/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) 
{
    let wins = {};
    let losses = {};
    for(const match of matches)
    {
        if(!wins[match[0]]) wins[match[0]] = 0;
        wins[match[0]]++;
    }

    for(const match of matches)
    {
        if(!losses[match[1]]) losses[match[1]] = 0;
        losses[match[1]]++;
    }

    let win = new Set();
    let lose = new Set();

    for(const loser in losses)
    {
        if(losses[loser] === 1) lose.add(loser);
    
    }
    for(const player in wins)
    {
        if(wins[player] >= 1 && !lose.has(player) && (!losses[player] || losses[player] <= 1)) win.add(player);
    }

    return [[...win], [...lose]];
};

console.log(findWinners([[1,3], [2,3], [3,6], [5,6], [5,7], [4,5], [4,8], [4,9], [10,4], [10,9]]))