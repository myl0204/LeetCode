/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    return ([...new Set(nums)]).length
};