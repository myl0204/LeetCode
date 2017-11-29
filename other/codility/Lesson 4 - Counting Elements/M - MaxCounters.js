// https://codility.com/programmers/lessons/4-counting_elements/max_counters/
// Correntness 100%, Performance 40%, complexity: O(N + M)
function solution(N, A) {
	const result = Array(N)
	result.fill(0)
	const increased = {}
	let count = 0
	A.forEach((item, index) => {
		if (item >= 1 && item <= N) {
			result[item - 1]++
			increased[item - 1] = increased[item - 1] ? increased[item - 1] + 1 : 1
		} else if (item === N + 1) {
			let tempCount = 0
			for (count in increased) {
				tempCount = tempCount > increased[count] ? tempCount : increased[count]
				delete increased[count]
			}
			count += tempCount
			result.fill(count)
		}
	})
	return result
}
// passed complexity: O(N + M), can i optimize?
function solution(N, A) {
	const point = [-1]
	const result = Array(N)
	let count = 0
	A.forEach((item, index) => {
		if (item === N + 1) {
			point.push(index)
		}
	})
	if (point.length > 1) { // 可能会没有“分割点”
		for (let i = 0; i < point.length - 1; i++) {
			let tempCount = 0
			let increased = {} // 这里用数组应该更好。
			for (let j = point[i] + 1; j < point[i + 1]; j++) {
				increased[A[j]] = increased[A[j]] ? increased[A[j]] + 1 : 1
				tempCount = tempCount > increased[A[j]] ? tempCount : increased[A[j]]
			}
			count += tempCount
		}
	}
	result.fill(count)
	for (let i = point.pop() + 1; i < A.length; i++) {
		result[A[i] - 1]++
	}
	return result
}