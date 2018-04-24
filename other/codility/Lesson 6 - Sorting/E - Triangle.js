// https://codility.com/programmers/lessons/6-sorting/triangle/
function solution(A) {
	A.sort((a, b) => {
		return b - a
	})
	const len = A.length
	// 过滤小于等于0的项，这一步有必要吗？
	// A = A.filter((item) => {
	// 	return item > 0
	// })
	for (let i = 0; i < len - 2; i++) {
		if (A[i] < A[i + 1] + A[i + 2]) return 1
	}
	return 0
}