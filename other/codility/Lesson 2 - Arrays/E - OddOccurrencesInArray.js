// https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
function solution(A) {
	A.sort()
	for(let i = 0, len = A.length; i < len; i++) {
		if (A[i] !== A[++i]) {
			return result = A[--i]
		}
	}
}