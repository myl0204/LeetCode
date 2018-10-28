/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var  twoSum = function(numbers, target) {
	var left = 0, right = numbers.length - 1, sum;
	if(numbers.length == 0 ) return numbers;
	while( left < right ){
        sum = numbers[left] + numbers[right];
		if( sum == target) {
			return [left+1,right+1]
		}else if ( sum < target ) {
			left+=1;
		}else {
			right-=1;
		}
	}
}