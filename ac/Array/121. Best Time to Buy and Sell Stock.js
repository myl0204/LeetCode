/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var profit = 0, minPrice = prices[0];
	for(var i = 1 ; i < prices.length ; i ++) {
		minPrice = Math.min(minPrice,prices[i])
		profit = Math.max(profit,prices[i] - minPrice)
	}

	return profit;
};