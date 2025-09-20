class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let current_prefix = strs[0];

        for (let i = 1; i < strs.length;i++)
        {
            while (!strs[i].startsWith(current_prefix)){
                current_prefix = current_prefix.slice(0,current_prefix.length -1)
                
                if (current_prefix === ""){
                    return "";
                }
            }
        }
        return current_prefix;

    }
};
