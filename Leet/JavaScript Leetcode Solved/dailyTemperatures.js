/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) 
{
    const days = [];
    for(let i = 0; i < temperatures.length; i++)
    {
        let count = 1;
        for(let j = i+1; j < temperatures.length; j++)
        {
            console.log(temperatures[i], temperatures[j], temperatures[i] > temperatures[j]);
            if(temperatures[i] > temperatures[j]) count++;
            else if(temperatures[i] < temperatures[j])
            {
                break;
            }
        }

        days.push(count);
    }

    return days;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));