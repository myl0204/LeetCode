// https://codility.com/programmers/lessons/5-prefix_sums/count_div/
function solution(A, B, K) {
	let reminder = A % K 
	let starter = reminder === 0? A : K - reminder + A
	let result = B - starter >= 0 ? Math.floor((B - starter) / K) + 1 : 0
	return result
}