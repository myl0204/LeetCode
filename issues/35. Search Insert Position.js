/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var result=0;
    nums.map(function(item,index){
        if(item == target) {
            result = index;
        }
    })
    return result;
};