class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}

const sol = new Solution();
console.log(sol.hasDuplicate([1, 2, 3, 1])); // true
console.log(sol.hasDuplicate([1, 2, 3]));    // false
