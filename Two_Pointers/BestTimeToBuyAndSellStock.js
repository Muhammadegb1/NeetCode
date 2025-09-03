class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l=0,r=1;
        while(l <= prices.length){
            if (prices[l] < prices[r]){
                profit = prices[r] - prices[l];
                maxProfit =  Math.max(maxProfit,profit);
            }
            else{
                l = r;
            }
            r++;
        }
        return maxProfit;
    }
}

const s = new Solution();
console.log(s.maxProfit([10,1,5,6,7,1]))
