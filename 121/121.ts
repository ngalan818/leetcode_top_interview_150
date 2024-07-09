/** Time: O(n^2), space: O(1) 
 *  Note: failed if n is too large
*/
function maxProfit(prices: number[]): number {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            profit = Math.max(prices[j] - prices[i], profit);
        }
    }
    return profit;
};

/** Kadane's Algorithm
 *  Time: O(n), space: O(1)
 */
function maxProfit(prices: number[]): number {
    let profit = 0;
    let min = prices[0];

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min);
    }

    return profit;
}