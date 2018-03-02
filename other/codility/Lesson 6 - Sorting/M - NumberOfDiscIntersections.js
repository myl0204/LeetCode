// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
/**
 * 要判断两圆是否相交，用代码来写就是A[i] + A[j] > j - i(j > i)，即两圆的半径相加大于圆心距离。
 * 复杂度要求O(N*log(N))，无脑的2次遍历循环肯定是不行了。
 * [solution description]
 * @param  {Array} A 给定的数组，序号代表圆点，值代表半径
 * @return {Number}   相交圆的个数（根据题意，包含也属于相交）
 */
function solution(A) {
	const len = A.length
	// 每个圆在x轴上的左右交点
	const lPoint = new Array(len)
	const rPoint = new Array(len)
	for(let i = 0; i < len; i++) {
		lPoint.push(i - A[i])
		rPoint.push(i + A[i])
	}
	// 将点从低到高排序
	function lowerToUpper(a, b) {
		return a - b
	}
	lPoint.sort(lowerToUpper)
	rPoint.sort(lowerToUpper)

	let intersection = 0
	let count = 0
	for(let i = 0, j = 0; i < len - 1; i++) {
		while(j < len && rPoint[i] >= lPoint[j]) {
			j++
			count++
		}
		intersection += count - i - 1
	}
	if(intersection > 10000000) intersection = -1
	return intersection
}