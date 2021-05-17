/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = []

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i < n + 1; i++) {
    let sum = 0
    for (let j = 0; j < i; j++) {
      sum += dp[i - j - 1] * dp[j]
    }

    dp[i] = sum
  }

  return dp[n]
}
// @lc code=end
