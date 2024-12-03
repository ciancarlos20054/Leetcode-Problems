/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) 
{
    points.sort((a,b) => a[0] - b[0]);
    const visited = new Set();
    let min = 0;
    let i = 0, j = 0;
    while(i < points.length-1)
    {
        if(j >= points.length)
        {
            min++;
            break;
        }
        if(visited.has(j))
        {
            j++;
            continue;
        }
        if(points[i][1] >= points[j][0] && points[i][1] <= points[j][1])
        {
            visited.add(j);
            j++;
            continue;
        }
        else if(points[i][1] >= points[j][0] && points[i][1] >= points[j][1])
        {
            visited.add(j);
            j++;
            continue;
        }
        else
        {
            min++;
            i = j;
            j++;
        }
    }

    return min;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));