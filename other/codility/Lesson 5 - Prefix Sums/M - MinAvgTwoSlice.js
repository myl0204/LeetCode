// https://codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
// 用时1h 有点僵
function solution(A) {
	const len = A.length
	// [2,5,2,2]
	let avg = (A[0] + A[1]) / 2 // 当前平均数
	let index = 0 // 平均数起始位置
	let result = {avg, index}
	let numCount = 2 // 组成当前平均数的数字长度
	for (let i = 1; i < len - 1; i++) {
		if (A[i + 1] > avg) { 
			if (avg < result.avg) {
				result.index = index
				result.avg = avg
			}
			avg = (A[i] + A[i + 1]) / 2
			index = i
			numCount = 2
		} else {
			let tempAvg = (A[i] + A[i + 1]) / 2
			if (tempAvg <= avg) { 
				let _tempAvg = (avg * numCount++ + A[i + 1]) / numCount
				if (_tempAvg < tempAvg) {
					avg = _tempAvg
					if (avg < result.avg) {
						result = {avg, index}
					}
				} else {
					avg = tempAvg
					numCount = 2
					index = i
					if (avg < result.avg) {
						result = {avg, index}
					}
				}
			} else {
				avg = (avg * numCount++ + A[i + 1]) / numCount
			}
		}
	}
	return result.index
}