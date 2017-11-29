function solution(A) {
	A.sort((a, b) => {
		return a - b
	})
	const len = A.length
	for (let i = 0; i < len; i++) {
		if (i + 1 !== A[i]) return 0
	}
	return 1
}