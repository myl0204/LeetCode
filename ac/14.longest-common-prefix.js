/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * @comments 搞复杂了，比对的时候不需要2分，主要当前项和下一个比对，找到最长匹配项，再以此继续向下匹配
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  const sortedStrs = strs.sort((a, b) => a.length - b.length)
  /**
   * @param {string[]} strs1
   * @param {string} prefix
   * @return {boolean}
   */
  function isCommonPrefix(strs1, prefix) {
    let result = true
    for (let i = 0; i < strs1.length; i++) {
      const currentStr = strs1[i]
      if (currentStr.indexOf(prefix) !== 0) {
        result = false
        break
      }
    }

    return result
  }
  const firstStr = strs[0]
  let n1 = 0
  let n2 = firstStr.length
  let n = Math.ceil((n1 + n2) / 2)
  let prefix = firstStr.substring(0, n)
  let lastN = 0
  while (true) {
    if (isCommonPrefix(sortedStrs, prefix)) {
      lastN = n
      n1 = n
    } else {
      n2 = n
    }
    if (n === Math.ceil((n1 + n2) / 2)) {
      break
    }
    n = Math.ceil((n1 + n2) / 2)
    prefix = firstStr.substring(0, n)
  }
  return firstStr.substring(0, lastN)
}
// @lc code=end
