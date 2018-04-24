// https://codility.com/programmers/lessons/6-sorting/distinct/
// 方案一，“优雅”。O(N*log(N)) or O(N)
function solution(A) {
	return [...new Set(A)].length
}

// 方案二，自己写逻辑看看。
// 复杂度相同，但是数组A有很多数据的时候，效率不如上面的。
function solution(A) {
	const memo = {}
	const len = A.length
	let result = 0
	A.forEach((item) => {
		if (!memo[item]) {
			result++
			memo[item] = 1
		}
	})
	return result
}