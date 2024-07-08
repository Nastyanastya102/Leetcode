/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums = [1, 2, 1, 3]) {
  if (nums.length < 3) return false;
  let low = Infinity,
    high = Infinity;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === low || element === high) {
    } else if (element < low) {
      low = element;
    } else if (element < high) {
      high = element;
    } else if (element > low && element > high && low < high) {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet());
