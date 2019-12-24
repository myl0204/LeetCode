/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// 从讨论区看来2种思路
// 1. 从头到尾 以每个（每2个）字符为中心，向两边扩散，尝试去找匹配的结果
// 2. 
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length
  let left = 0,
    right = 0
  for (let i = 0; i < length; i++) {
    extendsPalindrome(s, i, i)
    extendsPalindrome(s, i, i + 1)
  }

  return s.substring(left, right)

  /**
   * @param {string} s
   * @param {number} start
   * @param {number} end
   * @return {string}
   */
  function extendsPalindrome(s, start, end) {
    while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
      start--
      end++
    }

    if (right - left < end - start) {
      left = start + 1
      right = end
    }
  }
}
// @lc code=end
