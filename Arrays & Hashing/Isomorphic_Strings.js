// Isomorphic Strings
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    helper(s, t) {
        const myMap = new Map();
        for (let i = 0; i < s.length; i++) {
            if (myMap.has(s[i]) && myMap.get(s[i]) !== t[i]) {
                return false;
            }
            myMap.set(s[i], t[i]);
        }
        return true;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        return this.helper(s, t) && this.helper(t, s);
    }
}