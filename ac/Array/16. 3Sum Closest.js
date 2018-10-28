/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums.sort((a,b)=>a-b);
	var length = nums.length,result = nums[0] + nums[1] + nums[length-1];
	for(var i = 0; i < length-2; i++) {
		while(nums[i] == nums[i-1]) {
			i++;
		}
		var l = i + 1,r = length - 1;
		while(l<r) {
            var cur = nums[i] + nums[l] + nums[r] ;
			if(nums[i] + nums[l] + nums[r] == target ) {
				result = target;
				return result;
			}else if(nums[i] + nums[l] + nums[r] - target < 0){
				result = Math.abs(result-target) > Math.abs(cur-target) ? cur:result;
				l++;
			}else{
				result = Math.abs(result-target) > Math.abs(cur-target) ? cur:result;
				r--;
			}
		}
	}
	return result;
};