/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums = [1, 1, 1, 1, 1, 1, 1, 1, 1]) {
    let max = 0;
    let curr = 0;
    let l = 0;
    let zeros = 0;

    for(let r = 0; r < nums.length; r++) {
        if(nums[r]) {
            curr++;
            max = Math.max(max, r - l);
        }
        if(!nums[r]) {
            zeros++;
            if(zeros <= 1) max = Math.max(max, r - l);
        }

        if(zeros > 1) {
            while(zeros > 1) {
                if(!nums[l]) zeros--;
                l++;
            }
        }
    }   

    return max;
};
console.log(longestSubarray());


// 68 ms Beats 43.00%