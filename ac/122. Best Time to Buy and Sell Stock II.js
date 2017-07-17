/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var profit = 0, len = prices.length;
	for(var i = 0 ; i < len -1 ; i ++) {
			if(prices[i] < prices[i+1]) {
				profit = profit + prices[i+1] - prices[i] ;
		}
	}
	return profit;
};