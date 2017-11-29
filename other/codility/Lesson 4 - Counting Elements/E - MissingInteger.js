// https://codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution(A) {
	A.sort((a, b) => {
		return a - b
	})
	A = [...new Set(A)]
	let result = 1
	for(let i = 0, len = A.length; i < len; i++) {
		if (A[i] <= 0) continue
		if (A[i] === result) result++
			else return result
	}
	return result
}