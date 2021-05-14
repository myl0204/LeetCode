/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length

  // 初始化dp数组
  const sum = new Array(m)
  for (let i = 0; i < m; i ++) {
    sum[i] = []
  }

  // 基础状态
  sum[0][0] = grid[0][0]

  for (let i = 1; i < m; i++) {
    sum[i][0] = sum[i - 1][0] + grid[i][0]
  }

  for (let i = 1; i < n; i++) {
    sum[0][i] = sum[0][i - 1] + grid[0][i]
  }

  // 改变
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + grid[i][j]
    }
  }

  return sum[m - 1][n - 1]
}
// @lc code=end
