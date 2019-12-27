/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const r = (Number(a) + Number(b)).toString()
  let result = ''
  let step1 = 0
  for (let i = r.length - 1; i > 0; i--) {
    const b = r.charAt(i)
    if (b === '2') {
      step1 = 1
      result = 0 + result
    } else if (step1 + b === '11') {
      
      step1 = 1
      result = 0 + result
    } else {
      step1 = 0
      result = b + result
    }
  }
  if (step1 === 1) {
    result = step1 + result
  }
  return result
}
// @lc code=end
