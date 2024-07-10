/**
 * @param {number[]} array
 * @return {number}
 */
var maxArea = function (array =  [1,2,4,3]) {
  let i = 0,
    j = array.length - 1;
  let res = 0;

  for (i; i < j; ) {
    let sum = (j - i) * Math.min(array[i], array[j]);
    if (sum > res) {
      res = sum;
    }
    if (array[i] < array[j]) {
      i++;
    } else if (array[i] > array[j]) {
      j--;
    } else {
      i++;
      j--;
    }
  }

  return res;
};

console.log(maxArea());
