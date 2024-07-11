/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums =[2,2,2,3,1,1,4,1], k = 4) {
    let arr = nums.sort();
    let result = [];
    console.log(arr);
    let count = 0;
    let i = 0,
        j = 1;
    while (i < nums.length - 1) {
        console.log("EL arr[i]: ", arr[i], "INDEX I: ", i);
        console.log("EL arr[j]: ", arr[j], "INDEX J: ", j);
        console.log("---------------");

        if (arr[i] === undefined) {
            i++;
            j = i++;
        }
        else if (arr[j] === undefined) {
            j++;
        }
        else if (arr[i] + arr[j] === k) {
            console.log(arr[i], arr[j]);
            arr[i] = undefined;
            arr[j] = undefined;
            count++;
            i += 1;
            j = i + 1;
            console.log(arr);
        } else if (arr[i] + arr[j] !== k && j < nums.length - 1 && arr[i] + arr[j] < k)
            j++;
        else if (arr[i] + arr[j] !== k && j === nums.length - 1) {
            i += 1;
            j = i + 1;
        } else {
            i++;
        }
    }
    nums = arr.filter(item => Number(item));
    return count;
};
console.log(maxOperations());

