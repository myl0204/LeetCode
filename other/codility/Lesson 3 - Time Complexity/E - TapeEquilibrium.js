// https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
function solution(A) {
	const sum = A.reduce((prev, cur) => {
		return prev + cur
	})
	let diff = 100000
	let tempSum = 0
	let result
	const len = A.length
	for (let i = 0; i < len - 1; i++) {
		tempSum += A[i]
		if (sum / 2 === tempSum) return 0
		if( diff > Math.abs(sum / 2 - tempSum)) {
			diff = Math.abs(sum / 2 - tempSum)
			result = tempSum
		}
	}
	return Math.abs(sum - 2 * result)
}