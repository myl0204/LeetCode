/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1)
  dp[0] = 0
  // 这里loop函数并不能保证其结果是“最少”的,比如12的结果是4，1，1，1，而正解是4，4，4
  // function loop(n) {
  //   let sum = 0
  //   while (true) {
  //     const num = Math.sqrt(n)
  //     sum++
  //     if (Number.isInteger(num)) {
  //       break
  //     } else {
  //       n = n - Math.pow(Math.floor(num), 2)
  //     }
  //   }

  //   return sum
  // }

  // for (let i = 1; i < n + 1; i++) {
  //   dp[i] = Math.min(loop(i), dp[i - 1] + 1)
  // }

  // 对于i来说，一定是某个square number (j) 和组合(i - j * j)的数所构成
  for (let i = 1; i < n + 1; i++) {
    dp[i] = i
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j * j])
    }
  }

  return dp[n]
}
// @lc code=end
