/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * i think m & n doesn't make any sense
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0; j = 0;
  while (j < n) {
    if (i - j === m ) {
      nums1[i] = nums2[j];
      j++;
    }

    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++
    }
    i++;
  }
  nums1.length = m + n;
};