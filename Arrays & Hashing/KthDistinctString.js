// Kth Distinct String in an Array

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const map = new Map();
    let i = 1;
    for (const char of arr){
        map.set(char, (map.get(char) || 0) + 1);
    };

    for (const char of arr) {
        if (map.get(char) === 1) {
            k--;
            if (k === 0) return char;
        }
    }
    return "";
};