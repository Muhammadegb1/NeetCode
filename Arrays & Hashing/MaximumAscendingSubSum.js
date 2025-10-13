// Maximum Ascending Subarray Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {

    let incLength = 1, decLength = 1, maxLength = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            incLength++;
            decLength = 1;
        } else if (nums[i + 1] < nums[i]) {
            decLength++;
            incLength = 1;
        } else {
            incLength = 1;
            decLength = 1;
        }
        maxLength = Math.max(maxLength, incLength, decLength);
    }
    return maxLength;

    // let maxLen = 1;
    // let le = 1;
    // let flag = 0;
    // for(let i = 1; i < nums.length ; i++){
    //     if (nums[i] > nums[i - 1]){
    //         if (flag === 0) {
    //             flag = 1;
    //             le = 1;
    //         }
    //         le++;
    //         maxLen = Math.max(le,maxLen);
    //     }else if (nums[i] < nums[i-1]){
    //         if (flag === 1) {
    //             flag = 0;
    //             le = 1;
    //         }
    //         le++;
    //         maxLen = Math.max(le,maxLen);

    //     }
    //     else le = 1;
    // }
    // return maxLen;
};