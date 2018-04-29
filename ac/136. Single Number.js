/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const memo = {}
  for (let i = 0; i < nums.length; i ++) {
    memo[nums[i]] ?
      memo[nums[i]] ++ :
      memo[nums[i]] = 1
  }
  for (num in memo) {
    if (memo[num] === 1) {
      return Number(num)
    }
  }
};