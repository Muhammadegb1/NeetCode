// Find All Numbers Disappeared in An Array
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const set = new Set(nums); 
        const result = [];

        for (let i = 1; i <= nums.length; i++) {
            if (!set.has(i)) {
                result.push(i);  
            }
        }

        return result;
    }
}
