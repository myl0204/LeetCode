/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp = [0, nums[0]]
  
  for (let i = 2; i < nums.length + 1; i ++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[nums.length]
};
// @lc code=end

