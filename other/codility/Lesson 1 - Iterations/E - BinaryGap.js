// https://codility.com/programmers/lessons/1-iterations/binary_gap/
function solution(N) {
	let binaryN = N.toString(2)
	let result = 0
	binaryN = binaryN.replace(/0+$/, '')
	if (binaryN.indexOf('0') === -1) return result
	const regexp = /(0+)/g
	const resultArray = binaryN.match(regexp)
	const len = resultArray.length

	for(let i = 0; i < len; i++) {
		result = Math.max(result, resultArray[i].length)
	}
	return result
}