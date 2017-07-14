/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * i think m & n doesn't make any sense
 */
var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.concat(nums2);
    nums1.sort(function(a,b){
        return a - b ;
    })
};