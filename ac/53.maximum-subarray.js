/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start


// dp 动态规划 我也不懂啥是动态规划 学(chao)就完事了
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

// 分治
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  /**
   * @param {number[]} nums
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  function _maxSubArray(nums, left, right) {
    if (left === right) return nums[left]
    const mid = Math.floor((left + right) / 2)
    // divide! 分!
    // leftMax和rightMax分别为mid两边最大的maxSubArray
    const leftMax = _maxSubArray(nums, left, mid)
    const rightMax = _maxSubArray(nums, mid + 1, right)
    
    // lm和rm为 以mid or (mid+1)为起点，向“两边”延伸的最大值
    // 
    // 方向很重要，这也是为什么下面2个循环 一个i--; 一个i++
    let lm = -Number.MAX_SAFE_INTEGER, rm = -Number.MAX_SAFE_INTEGER
    let sum = 0
    for (let i = mid; i >= left; i--) {
      sum += nums[i]
      lm = Math.max(sum, lm)
    }
    sum = 0
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i]
      rm = Math.max(sum, rm)
    }

    return Math.max(leftMax, rightMax, lm + rm)
  }
  return _maxSubArray(nums, 0, nums.length - 1)
}

// @lc code=end

