class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const mapArr = new Map();
        for (let s of strs) {
            const newArray = new Array(26).fill(0);
            for (let c of s) {
                newArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = newArray.join("#"); // מחרוזת מייצגת
            if (!mapArr.has(key)) {
                mapArr.set(key, [s]);   // נתחיל מערך
            } else {
                mapArr.get(key).push(s); // נוסיף קבוצה קיימת
            }
        }

        return [...mapArr.values()];
    }
}

const sol = new Solution();
console.log(sol.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
console.log(sol.groupAnagrams(["x"]));