// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/	
function solution(A) {
	const len = A.length
	const result = []
	A.sort((a, b) => {
		return a - b
	})
	// 1负，全负，全正情况
	// 
	result.push(A[len - 1] * A[len - 2] * A[len - 3])

	// 正数数量小于等于2

	result.push(A[len - 1] * A[0] * A[1])

	// 其他
	let temp = A[0] * A[1]
	let temp1 = A[len - 1] * A[len - 2]
	if(temp < temp1) {
		result.push(temp1 * A[len - 3])
	} else {
		result.push(temp * A[len - 1])
	}
	return Math.max(...result)
}