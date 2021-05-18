/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 归类在dp中，想不出dp[i]与dp[i-x]的关系
  // 看了讨论发现用two points来做

  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let sum = 0
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        sum += leftMax - height[left]
      }

      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        sum += rightMax - height[right]
      }
      right--
    }
  }

  return sum
}
// @lc code=end
