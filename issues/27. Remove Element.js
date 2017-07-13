/**
 * @description [移除数组中指定数字]
 * @param {number[]} nums
 * @param {number} val
 * @return {number} 返回数组长度
 */
var removeElement = function(nums, val) {
    return nums.filter(function(value){
        return value != val
    }).length
};
