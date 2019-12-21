/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
// 	const min = Math.pow(-2, 31)
// 	const max = Math.pow(2, 31) - 1
// 	const sign = x < 0 ? -1 : 1
// 	const result =  Number((sign * x).toString().split('').reverse().join('') * sign)
// 	if (result > max || result < min) return 0
// 	return result
// }

var reverse = function(x) {
	const isGreaterThan0 = Math.sign(x) > 0
	let result = isGreaterThan0 ? '' : '-'
	while (Math.abs(x) >= 10) {
		const num = x % 10
		if (isGreaterThan0) {
			x = Math.floor(x / 10)
		} else {
			x = Math.ceil(x / 10)
		}
		
		result =  result + Math.abs(num)
	}
	result = result + Math.abs(x)
	const min = Math.pow(-2, 31)
	const max = Math.pow(2, 31) - 1
	result = Number(result)
	if (result > max || result < min) return 0
	return Number(result)
}