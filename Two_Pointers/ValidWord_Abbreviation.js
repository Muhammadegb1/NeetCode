class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        const len = word.length;
        let index = 0;

        for (let i = 0; i < abbr.length; i++) {
            if (isNaN(abbr[i])) {
                if (word[index] !== abbr[i]) return false;
                index++;
            } else {
                if (abbr[i] === '0') return false; 
                let num = 0;
                let temp=i
                while (temp < abbr.length && !isNaN(abbr[temp])) {
                    num = num * 10 + parseInt(abbr[temp]);
                    temp++;
                }
                index += num;
            }
        }
        return index === len;

    }
}
