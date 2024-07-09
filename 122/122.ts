function maxProfit(prices: number[]): number {
    let min = prices[0];
    let profit = 0;
    let total = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i - 1]) {
            total += profit;
            min = prices[i];
            profit = 0;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
        profit = Math.max(profit, prices[i] - min);
    }
    total += profit;
    return total;
};