/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums = [0, 0, 0, 0, 0, 0, 0, 1], k = 2) {
  let max = 0;
  let curr = 0;
  let l = 0;
  let zeros = 0;

  for (let r = 0; r < nums.length; r++) {
    if (!nums[r]) {
      zeros++;
    }
    if (zeros <= k) {
      ++curr;
      max = Math.max(max, r - l + 1);
    }

    if (zeros > k) {
        console.log(r);
      max = Math.max(max, r - l);
      while (zeros > k) {
        if (curr > 0) curr--;
        if (!nums[l]) {
          zeros -= 1;
        }
        l++;
      }
    }
  }

  return max;
};

console.log(longestOnes());
