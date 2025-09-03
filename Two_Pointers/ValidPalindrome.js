class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0
        let j = s.length - 1; 

        while (i < j){
            while (i < j && !this.alphaNum(s[i])){
                i++;
            }
            while (j > i && !this.alphaNum(s[j])){
                j--;
            }
            if (s[i].toLowerCase() != s[j].toLowerCase()){
                return false;
            }
            i++;
            j--;
        }
        return true;

    }
    alphaNum(c){
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}

const s = new Solution();
console.log(s.isPalindrome("Was 3 it a car or a cat I 3 saw?"))
console.log(s.isPalindrome("tab a cat"))