// Maximum Ascending Subarray Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let currentSum = nums[0];
    let maxSum = currentSum;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i]; 
        } else {
            currentSum = nums[i];  
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

};