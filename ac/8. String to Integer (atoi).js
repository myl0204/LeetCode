/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MAX_NUMBER = Math.pow(2, 31) - 1
  const MIN_NUMBER = Math.pow(-2, 31)
  let result = parseInt(str)
  result = isNaN(result)
    ? 0
    : result > MAX_NUMBER
    ? MAX_NUMBER
    : result < MIN_NUMBER
    ? MIN_NUMBER : result
  return result
}