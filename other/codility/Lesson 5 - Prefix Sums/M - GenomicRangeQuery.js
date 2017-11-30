//https://codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
//O(M + N)，写了好久，好蠢!
function solution(S, P, Q) {
	const N = S.length
	const len = P.length
	const arrayOne = []
	const arrayTwo = []
	const arrayThree = []
	const arrayFour = []
	let index = 0
	const result = []
	S.replace(/A|C|G|T/g, (match) => {
		switch(match) {
			case 'A': arrayOne.push(index++)
				break
			case 'C': arrayTwo.push(index++)
				break
			case 'G': arrayThree.push(index++)
				break
			case 'T': arrayFour.push(index++)
				break
		}
	})

	/**
	 * [traversal description]
	 * @param  {Array} array  [要遍历的数组]
	 * @param  {Number} left  [较小的数]
	 * @param  {Number} right [较大的数]
	 * @param  {Number} num   [该数组返回的结果]
	 * @return {Number}       [如果数组中有元素符合要求，返回指定数字]
	 */
	function traversal(array, left, right, num) { // 用二分法
		let low = 0
		let high = array.length - 1
		let mid
		const memo = {}
		while (low <= high) {
			if (memo[mid]) {
				break
			} else memo[mid] = 1
			mid = Math.floor((low + high) / 2)
			if (array[mid] >= left) {
				if (array[mid] <= right) {
					return num
				} else high = mid - 1
			} else low = mid + 1
		}
	}

	for (let i = 0; i < len; i++) {
		const left = P[i]
		const right = Q[i]
		let num = traversal(arrayOne, left, right, 1) || traversal(arrayTwo, left, right, 2)
			|| traversal(arrayThree, left, right, 3) || 4
		result.push(num)
	}
	return result
}