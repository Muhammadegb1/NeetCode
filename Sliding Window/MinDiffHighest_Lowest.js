//Minimum Difference Between Highest And Lowest of K Scores


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        if (k === 1) return 0;
        nums.sort( (a,b) => a - b);

        let minDiff = Infinity;
        
        for (let i = 0 ; i <= nums.length - k ; i++){
            const diff = nums[i + k - 1] - nums[i];
            minDiff = Math.min(diff,minDiff);
        }
        return minDiff;
    }
}

const sol = new Solution();
console.log(sol.minimumDifference([9, 4, 1, 7], 2)); // 2
console.log(sol.minimumDifference([1,5,6,14,15], 3)); // 5