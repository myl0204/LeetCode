/**
 * @description [移除数组中指定数字]
 * @param {number[]} nums
 * @param {number} val
 * @return {number} 返回数组长度
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0;
  let int = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[int++] = nums[i];
    }
  }
  return int;
};
