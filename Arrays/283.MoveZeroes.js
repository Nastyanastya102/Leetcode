/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */                                 
var moveZeroes = function(nums = [1,2,4,0,12]) {
    if (nums.length < 2) return nums;

    let j = 1;
    for (let i = 0; i < nums.length; i++) {
      j = i;
      if (nums[i] === 0 && nums[j] !== 0) {
        nums[i] = nums[j];
        nums[j] = 0;
      } 

      if (nums[i] === 0 && nums[j] === 0) {
        while (nums[j] === 0 && j < nums.length - 1) {
          j++;
        }
        nums[i] = nums[j];
        nums[j] = 0;
      } else {
      }
    }

    return nums;
};


console.log(moveZeroes());