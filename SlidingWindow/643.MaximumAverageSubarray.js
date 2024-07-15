/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums = [0,1,1,3,3], k = 4) {
    let curr = 0;
    let max = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        curr += nums[i];

        if (i >= k - 1) {
            max = Math.max(curr, max);
            curr -= nums[i - (k - 1)];
        }
    }

    if (max === -Infinity) {
        return curr / k;
    }

    return max / k;
};

console.log(findMaxAverage());