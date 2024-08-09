/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = [nums[0]], rightSum = [nums[nums.length - 1]];
    
    for(let i = 1; i < nums.length; i++) 
    {
      leftSum.push(leftSum[i - 1] + nums[i]);
      rightSum.push(rightSum[rightSum.length - 1] + nums[nums.length - (i + 1)]);
    }

    for(let i = 0; i < nums.length; i++) 
      if(leftSum[i] === rightSum.at(-(i + 1))) return i;

    return -1;
};