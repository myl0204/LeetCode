/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 暴力循环。。 会超时。
  // let n = s.length
  // let result = 0
  // function isValid(s) {
  //   if (s.length % 2 == 1) return false
  //   const stack = []

  //   for (let i = 0; i < s.length; i++) {
  //     const lastStr = stack[stack.length - 1]
  //     if (s.charAt(i) === '(') {
  //       if (lastStr === ')') return false
  //       stack.push('(')
  //     } else {
  //       if (stack.length === 0) return false
  //       if (stack[stack.length - 1] === '(') stack.length--
  //     }
  //   }

  //   return stack.length === 0

  //   // return result
  // }

  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 2; j <= s.length; j++) {
  //     const _s = s.substring(i, j)
  //     if (isValid(_s)) {
  //       result = Math.max(result, _s.length)
  //     }
  //   }
  // }

  // return result

  // dp[i]代表index为i时的最长合规数
  const dp = new Array(s.length).fill(0)
  let max = 0
  for (let i = 0; i < s.length; i++) {
    // 如果以"("结尾，不可能是合规的
    if (s.charAt(i) === '(') {
      dp[i] = 0
    } else {
      // 若前一个是"("，则i-1与i匹配，dp[i] = dp[i - 2] + 2
      if (s.charAt(i - 1) === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
      } else {
        // 若前一个为")"：
        // 先判断前i - dp[i - 1] - 1是否为"("，如果是的话则认为匹配
        if (s.charAt(i - dp[i - 1] - 1) === '(') {
          dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0)
        }
      }

      max = Math.max(max, dp[i])
    }
  }

  return max
}
// @lc code=end
