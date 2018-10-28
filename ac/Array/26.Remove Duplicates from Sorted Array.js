/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (num.length === 0 || nums.length === 1) return nums.length;
  let int = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[++int] = nums[i + 1];
    }
  }

  return int + 1;
};