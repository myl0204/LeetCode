// https://codility.com/programmers/lessons/5-prefix_sums/passing_cars/
function solution(A) {
	const len = A.length
	const eastCars = []
	let result = 0
	for (let i = 0; i < len; i++) {
		if (A[i] === 0) {
			eastCars.push(A[i])
		} else {
			if (eastCars.length > 0) {
				result += eastCars.length
				if (result > 1000000000) {
					return -1
				}
			}
		}
	}
	return result
}