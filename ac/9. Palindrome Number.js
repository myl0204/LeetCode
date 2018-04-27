/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true
  let strX = x.toString()
  const mid = Math.floor(strX.length / 2)
  const right = strX.substr(-mid)
  const left = strX.substr(0, mid).split('').reverse().join('')
  return left === right
}

console.log(isPalindrome(-1))

'22211222'.substr(-1, 3)