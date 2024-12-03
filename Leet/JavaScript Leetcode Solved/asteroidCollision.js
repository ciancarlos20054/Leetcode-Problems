/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) 
{
    const right = [];
    const res = [];
    for(let i = 0; i < asteroids.length; i++)
    {
        if(asteroids[i] > 0) right.push(asteroids[i]);
        else
        {
            if(right.length === 0) 
            {
                res.push(asteroids[i]);
                continue;
            }
            let value = Math.abs(asteroids[i]);
            let flag = false;
            while(flag != true)
            {
                if(right.length === 0) 
                {
                    res.push(asteroids[i]);
                    flag = true;
                    continue;
                }
                
                const ast = right.pop();
                
                if(value < ast)
                {
                    flag = true;
                    right.push(ast);
                }
                else if(value === ast)
                {
                    value = 0;
                    flag = true;
                }
            }
        }
    }

    for(let i = 0; i < right.length; i++)
    {
        res.push(right[i]);
    }
    
    return res;
};

console.log(asteroidCollision([-2,-2,1,-2]))