//Move Zeroes

class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let i = 0;
        let j = 0;
        while (i < nums.length && j < nums.length){
            if(nums[i] !== 0){
                nums[j] = nums[i]; 
                if(i !== j) nums[i] = 0; 
                i++;
                j++;
            }else {
                i++;
            }
        }
    }
}
