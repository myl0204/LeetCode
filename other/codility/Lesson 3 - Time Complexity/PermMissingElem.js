// https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
function solution(A) {
	if (A.length ===0) return 1
	A.sort((a, b) => {
		return a - b
	})
	for(let i = 0; i < A.length; i++) {
		if (i + 1 !== A[i]) return Number(i + 1)
		 else return Number(i + 2)
	}
}