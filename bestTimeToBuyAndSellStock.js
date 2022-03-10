var maxProfit = function(prices) {
    let l = 0
    let r = 1
    let currentProfit = 0
    let maxProfit = 0
    
    while (r < prices.length){
        if( prices[l] < prices[r]){ //while lower bound is still less than the current price
            currentProfit = prices[r] - prices[l]
            maxProfit = Math.max(maxProfit, currentProfit)
        } else { //if we find a number LOWER than the lower bound, make that the new lower bound and continue
            l = r;
        }
        r += 1;
    }
    return maxProfit
};