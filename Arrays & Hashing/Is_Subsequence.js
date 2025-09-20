// Is Subsequence
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let n = t.length;
        let j = 0;
        for (let i = 0; i < n && j < s.length ; i++){
            if(s[j] === t[i])
                j++;
        }
        return j===s.length;
    }
}
