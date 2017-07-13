/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){
  var saved={}
  var result=[]
  for(i=0; i< nums.length; i++){
    if(saved.hasOwnProperty(nums[i])){
      result[0] = saved[nums[i]] + 1
      result[1] = i + 1;
      return result
    }
    saved[target - nums[i]] = i
  }
}