// https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// bad one, complexity: O(N * N)
function solution(X, A) {
	const len = A.length
	const memo = []
	for (let i = 0; i < len; i++) {
		if (!memo.includes(A[i])) memo.push(A[i]) //这里memo的长度可以等于A的长度
		if (memo.length === X) {
			return i
		}
	}
	return -1
}
// O(N) 
function solution(X, A) {
	const len = A.length
	let help = 0 // 用来记录memo的变量数
	const memo = {} // 记录已出现过的数字
	for (let i = 0; i < len; i++) {
		if (!memo[A[i]]) {
			help++
			memo[A[i]] = 1
		}
		if (help === X) {
			return i
		}
	}
	return -1
}