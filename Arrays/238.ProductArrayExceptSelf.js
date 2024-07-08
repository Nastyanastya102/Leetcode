/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums = [2,3,5,0]) {
    let resArr = [1, ];

    let fix = 1;
    for (let index = 0; index < nums.length - 1; index++) {
        const element = nums[index];
        resArr.push(element * fix);
        fix = element * fix;
    }
    fix = 1;

    for (let index = nums.length - 1; index >= 0; index--) {
        const element = nums[index];
        resArr[index] *= fix;
        fix = element * fix;
    }

    return resArr;
};

var productExceptSelf2 = function(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
};
console.log(productExceptSelf());
