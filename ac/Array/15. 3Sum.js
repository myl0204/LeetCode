/**
 * @param {number[]} nums
 * @return {number[][]}
 * 319ms beat 98.13%
 */
function threeSum(nums) {
	nums.sort((a,b)=>a-b);
	var result = [],len = nums.length;
	for(var i  = 0 ; i < len-2 ; i++) {
		while(nums[i] == nums[i-1]) {
			i++;
		}
		var l = i+1,r=len-1;
		while( l < r ) {
			if(nums[l] + nums[r] + nums[i] == 0) {
        result.push([ nums[i], nums[l], nums[r] ]);
        l++;
        r--;
				while(nums[l] == nums[l-1]) {
					l++;
				}
				while(nums[r] == nums[r+1]){
					r--;
				}
			}else if(nums[l] + nums[r] + nums[i] < 0) {
				l++;
			}else {
				r--;
			}
		}
	}
	return result;
}