// https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/
function solution(A, K) {
	const len = A.length
	K = K % len
	if (K === 0) return A
	const part = A.splice(0, K)
	if (K > len / 2) {
		A = part.concat(A)
	} else {
		A = A.concat(part)
	}
	return A
}