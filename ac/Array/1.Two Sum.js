/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var obj = {},result = [];
	for(var i = 0 ; i< nums.length ; i++){
		if(obj.hasOwnProperty(nums[i])){
			result = [obj[nums[i]],i]
		}else{
			obj[target-nums[i]] = i;
		}
	}
	return result;
};