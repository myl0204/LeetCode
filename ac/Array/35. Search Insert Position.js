/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            result = i;
            break;
        }
    }

    if (result === -1) {
        result = nums.length;
    }

    return result;
};