/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 * 
 */

// Accepted
// 76/76 cases passed (52 ms)
// Your runtime beats 86.33 % of javascript submissions
// Your memory usage beats 65 % of javascript submissions (33.9 MB)


// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false
  const stack = []
  const left = ['(', '[', '{']
  const right = [')', ']', '}']
  const rule = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    const length = stack.length
    // const last = stack[stack.length - 1]
    if (left.includes(current)) {
      stack.push(current)
    } else {
      const last = stack[length - 1]
      if (rule[last] === current) {
        stack.length = length - 1
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};
// @lc code=end

