/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i < amount + 1; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]

  // solution2
  // const memo = []
  // function dp(n) {
  //   if (typeof memo[n] !== 'undefined') return memo[n]
  //   if (n === 0) return 0
  //   if (n < 0) return -1

  //   let res = Infinity
  //   for(const coin of coins) {
      
  //     const sub = dp(n - coin)
  //     if (sub === -1) continue
  //     res = Math.min(res, 1 + sub)

  //   }

  //   memo[n] = res === Infinity ? -1 : res

  //   return memo[n]
  // }

  // return dp(amount)
  // return typeof memo[amount] === 'undefined' ? -1 : memo[amount]
}
// @lc code=end
