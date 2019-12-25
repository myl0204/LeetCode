/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
// 93.31 + 25 + 3
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  function compareTwo(str1 = '', str2 = '') {
    let result = str1
    for (let i = 0; i < str1.length; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) {
        result = str1.substring(0, i)
        break
      }
    }
    return result
  }
  const result =
    strs.reduce((prev, cur) => {
      return compareTwo(prev, cur)
    }, strs[0]) || ''

  return result
}
// @lc code=end
