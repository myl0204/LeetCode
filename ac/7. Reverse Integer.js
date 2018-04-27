/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	const min = Math.pow(-2, 31)
	const max = Math.pow(2, 31) - 1
	if (x > max || x < min) return 0
	const sign = x < 0 ? -1 : 1
	return Number((sign * x).toString().split('').reverse().join('').replace(/^(?:\s)*/g, '') * sign)
}