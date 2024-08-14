/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr = [0];
    let highest = 0;

    for(let i = 0; i < gain.length; i++)
    {
        if(arr[i] + gain[i] > highest) highest = arr[i] + gain[i];
        arr.push(arr[i] + gain[i]);
    }

    return highest;
};